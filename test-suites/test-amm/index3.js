require("dotenv").config();
var Web3 = require("web3");

console.log("API_URL: ", process.env.API_URL);

const tokenTESTABI = require("./contracts/TEST.json");
const tokenTESTAddress = "0xC702932fC75645322c682Bd6B4d58c538cAdCd7b";

const lendingPoolAddressesProviderABI = require("./contracts/ILendingPoolAddressesProvider.json");
const lendingPoolAddressesProviderAddress =
  "0x86C3a2cE7E35c215eAF8D715506F4A4D96164Fcf";

const lendingPoolConfiguratorABI = require("./contracts/LendingPoolConfigurator.json");

const lendingPoolABI = require("./contracts/ILendingPool.json");

var web3;
var tokenTESTContract;
var lendingPoolAddressesProvider;

const initializeWeb3 = async () => {
  try {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL));
    let block = await web3.eth.getBlockNumber();
    console.log("block: ", block);
  } catch (error) {}
};

const getAccountBalance = async (account) => {
  try {
    console.log("account: ", account);
    console.log("balance: ", await web3.eth.getBalance(account), " wei");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const initializeContracts = async () => {
  try {
    console.log("\nget tokenTESTContract...");
    tokenTESTContract = new web3.eth.Contract(tokenTESTABI, tokenTESTAddress);
    console.log("tokenTESTContract: ", tokenTESTContract._address);

    console.log("\nget lendingPoolAddressesProvider...");
    lendingPoolAddressesProvider = new web3.eth.Contract(lendingPoolAddressesProviderABI, lendingPoolAddressesProviderAddress);
    console.log("lendingPoolAddressesProvider: ", lendingPoolAddressesProvider._address);

  } catch (error) {
    console.log(error);
    throw error;
  }
};
const unpause = async () => {
  console.log("\nget lendingPoolConfiguratorAddress...");
  let lendingPoolConfiguratorAddress = "0x917CB7567a9cFF32a9E1856591B3D34C9CAF61c9"; //await lendingPoolAddressesProvider.methods.getLendingPoolConfigurator().call();
  console.log("lendingPoolConfiguratorAddress: ", lendingPoolConfiguratorAddress);

  console.log("\nget lendingPoolConfigurator...");
  let lendingPoolConfigurator = new web3.eth.Contract(lendingPoolConfiguratorABI, lendingPoolConfiguratorAddress);
  console.log("lendingPoolConfigurator: ", lendingPoolConfigurator._address);

  console.log("\nget lendingPoolAddress...");
  let lendingPoolAddress = "0x0486F0f2c43e0830BA3CDE221B3F9965f91B7d50"; //await lendingPoolAddressesProvider.methods.getLendingPool().call();
  console.log("lendingPoolAddress: ", lendingPoolAddress);

  console.log("\nget lendingPool...");
  let lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddress);
  console.log("lendingPool: ", lendingPool._address);

  const query = lendingPoolConfigurator.methods.setPoolPause(false);
  const PRIVATE_KEY = "0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0";
  const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
  // console.log("query: ", query)
  console.log("from: ", from);

  // console.log("emergencyAdmin", await lendingPoolAddressesProvider.methods.getEmergencyAdmin().call());
  console.log("\n");

  console.log("paused?", await lendingPool.methods.paused().call());
  const transaction = {
    to: lendingPoolConfiguratorAddress,
    from,
    value: "0",
    data: query.encodeABI(),
    gasPrice: web3.utils.toWei("1", "gwei"),
    gas: 12000000, //Math.round((await query.estimateGas({ from })) * 12), // 1.5 coefficient, just make sure that gas amount is enough
    nonce: await web3.eth.getTransactionCount(from, "pending"),
  };

  console.log("signTransaction...");
  var signed;
  try {
    signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    console.log("signed: ", signed);
  } catch (error) {
    console.log("error: ", error);
  }

  try {
    console.log("sendSignedTransaction...");
    const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log("status: ", hash.status);
  } catch (error) {
    console.log("error: ", error);
  }
  console.log("paused?", await lendingPool.methods.paused().call());
};

const mint2 = async () => {
  let tokenContract = tokenTESTContract;

  console.log("name: ", await tokenContract.methods.name().call());
  console.log("symbol: ", await tokenContract.methods.symbol().call());
  console.log(
    "balanceOf 348: ",
    await tokenContract.methods
      .balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761")
      .call()
  );
  console.log("decimals: ", await tokenContract.methods.decimals().call());
  console.log(
    "totalSupply: ",
    await tokenContract.methods.totalSupply().call()
  );

  const PRIVATE_KEY =
    "0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0";
  const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

  //console.log("tokenContract: ", tokenContract);
  const query = await tokenContract.methods.mint(100);

  const transaction = {
    to: tokenContract._address,
    from,
    value: "0",
    data: query.encodeABI(),
    gasPrice: web3.utils.toWei("20", "gwei"),
    gas: Math.round((await query.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
    nonce: await web3.eth.getTransactionCount(from, "pending"),
  };

  const signed = await web3.eth.accounts.signTransaction(
    transaction,
    PRIVATE_KEY
  );

  const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction);
  console.log("status: ", hash.status);
};

const deposit = async () => {
  const depositor = "0x4CBeD43421a782C90CF241F8981ebce5a760b761";
  const borrower = "0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6";

  console.log("lendingPoolAddressesProvider: "); //, lendingPoolAddressesProvider);

  console.log(
    "TEST balanceOf 348: ",
    await tokenTESTContract.methods
      .balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019")
      .call()
  );
  console.log(
    "TEST balanceOf 4CB: ",
    await tokenTESTContract.methods
      .balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761")
      .call()
  );
  console.log(
    "TEST balanceOf aa0: ",
    await tokenTESTContract.methods
      .balanceOf("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6")
      .call()
  );

  let lendingPoolAddress = await lendingPoolAddressesProvider.methods
    .getLendingPool()
    .call();
  console.log("lendingPoolAddress: ", lendingPoolAddress);

  let lendingPool = new web3.eth.Contract(
    lendingPoolABI,
    lendingPoolAddress
  );
  //console.log('lendingPool: ', lendingPool);

  // Address                                    Public Key                                                            Private Key
  // 0x34862f8e6b077FA6C95B3CD291AC6405b623a019	0x0338986b8cb1d9e126b3ffcce802087343c7934ca92c28162bf8d82d18917c0ddf	0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a
  // 0x4CBeD43421a782C90CF241F8981ebce5a760b761	0x038b2deeb81d441b90405ea1693140744228e3dde52e27c13b050b4c35ee305b6a	0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0
  // 0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6	0x0389893dba367ded0b094d7c18414df8fc2b2cc87b6f66f850b785b5fa522d6a53	0xac0dc399e43f5d5a9e64e21d03ec221cdd69066d925741d9541acf8df5211a15

  const PRIVATE_KEY = "0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0";
  const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

  // address asset      = 0x2467F0d625167D0599E21f8A7f8E05De99B539bf
  // uint256 amount     = 12
  // address onBehalfOf = 0x34862f8e6b077FA6C95B3CD291AC6405b623a019
  // pool.deposit(asset, amount, onBehalfOf, 0); 0 - referralCode

  const asset = tokenTESTAddress;
  // const asset = tokenTKNSAddress;
  const amount = 10;
  const onBehalfOf = depositor; //"0x34862f8e6b077FA6C95B3CD291AC6405b623a019";
  const referralCode = 0;

  // let isUnlocked = await web3.eth.personal.unlockAccount("0xcc8d743....97278fe497ee90...", "password", 60);
  // if(isUnlocked) {
  // };

  // ============================

  let tokenContract = tokenTESTContract;

  console.log("name: ", await tokenContract.methods.name().call());
  console.log("symbol: ", await tokenContract.methods.symbol().call());
  console.log(
    "balanceOf 348: ",
    await tokenContract.methods
      .balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761")
      .call()
  );
  console.log("decimals: ", await tokenContract.methods.decimals().call());
  console.log(
    "totalSupply: ",
    await tokenContract.methods.totalSupply().call()
  );

  const PRIVATE_KEY1 =
    "0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0";
  const { address: from1 } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

  //console.log("tokenContract: ", tokenContract);
  const query1 = await tokenContract.methods.approve(
    lendingPoolAddress,
    amount
  );

  const transaction1 = {
    to: tokenContract._address,
    from,
    value: "0",
    data: query1.encodeABI(),
    gasPrice: web3.utils.toWei("20", "gwei"),
    gas: Math.round((await query1.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
    nonce: await web3.eth.getTransactionCount(from1, "pending"),
  };

  const signed1 = await web3.eth.accounts.signTransaction(
    transaction1,
    PRIVATE_KEY
  );

  const hash1 = await web3.eth.sendSignedTransaction(signed1.rawTransaction);
  console.log("status: ", hash1.status);
  console.log(
    "allowance: ",
    await tokenContract.methods.allowance(depositor, lendingPoolAddress).call()
  );

  console.log(
    "lendingPool.getReservesList: ",
    await lendingPool.methods.getReservesList().call()
  );

  // ============================

  const query = await lendingPool.methods.deposit(
    "0xC702932fC75645322c682Bd6B4d58c538cAdCd7b",
    amount,
    onBehalfOf,
    referralCode
  );
  // console.log("query: ", query)
  console.log("from: ", from);
  console.log("depositor: ", depositor);
  const transaction = {
    to: lendingPoolAddress,
    from,
    value: "0",
    data: query.encodeABI(),
    gasPrice: web3.utils.toWei("1", "gwei"),
    gas: 12000000, //Math.round((await query.estimateGas({ from })) * 12), // 1.5 coefficient, just make sure that gas amount is enough
    nonce: await web3.eth.getTransactionCount(from, "pending"),
  };

  console.log("signTransaction...");
  var signed;
  try {
    signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    console.log("signed: ", signed);
  } catch (error) {
    console.log("error: ", error);
  }

  try {
    console.log("sendSignedTransaction...");
    const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log("status: ", hash.status);
  } catch (error) {
    console.log("error: ", error);
  }
};

(async () => {
  console.log("initializeWeb3");
  console.log("--------------");
  await initializeWeb3();

  console.log("\ngetAccountBalance");
  console.log("-----------------");
  await getAccountBalance("0x34862f8e6b077FA6C95B3CD291AC6405b623a019");
  await getAccountBalance("0x4CBeD43421a782C90CF241F8981ebce5a760b761");
  await getAccountBalance("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6");
  
  console.log("\ninitializeContracts");
  console.log("-------------------");
  await initializeContracts();
  console.log("--- unpause ---");
  await unpause();
  console.log("\n--- mint ---");
  await mint2();
  console.log("\n--- deposit ---");
  await deposit();
})();