require('dotenv').config();
const Tx = require("@ethereumjs/tx").Transaction;
const Common = require("@ethereumjs/common").default;
const { Chain, CustomChain, Hardfork } = require("@ethereumjs/common");

const { ethers } = require("ethers");
const tokenTESTABI = require("./contracts/TEST.json");
const tokenTESTAddress = "0xC702932fC75645322c682Bd6B4d58c538cAdCd7b";
const lendingPoolAddressesProviderABI = require("./contracts/ILendingPoolAddressesProvider.json");
const lendingPoolAddressesProviderAddress = "0xb8cdFb73C1C410cb395A414231958348F315D706";
const lendingPoolABI = require("./contracts/ILendingPool.json");
const lendingPoolAddress = "0x0486F0f2c43e0830BA3CDE221B3F9965f91B7d50";

const deposit = async () => {
    // const zero = BigNumber.from('0');
    // const depositSize = parseEther('5');
    const daiSize = 10 //parseEther('10000');

    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    //const provider = new ethers.providers.JsonRpcProvider();
    //console.log("===== provider =====", provider);

    const signer = provider.getSigner("0x4CBeD43421a782C90CF241F8981ebce5a760b761");
    // const signer = provider.getSigner();
    console.log('signer: ', signer);
    console.log('signer.getAddress(): ', await signer.getAddress());

    console.log("getBlockNumber: ", await provider.getBlockNumber());

    // The Contract object
    const tokenContract = new ethers.Contract(tokenTESTAddress, tokenTESTABI, provider);
    console.log("tokenContract: ", tokenContract.address);

    const lendingPoolAddressesProvider = new ethers.Contract(lendingPoolAddressesProviderAddress, lendingPoolAddressesProviderABI, provider);
    // console.log("===== lendingPoolAddressesProvider.address =====", lendingPoolAddressesProvider.address);
    // console.log("===== lendingPoolAddressesProvider =====", lendingPoolAddressesProvider);

    const lendingPool = new ethers.Contract(lendingPoolAddress, lendingPoolABI, provider);
    console.log('lendingPool: ', lendingPool.address);

    // Load the HRE into helpers to access signers
    // run("set-DRE")

    // Import getters to instance any Aave contract
    // const contractGetters = require('./helpers/contracts-getters');

    // Load the first signer
    //const signer = await contractGetters.getFirstSigner();
    // const signer = new ethers.provider.getSigner("0x4CBeD43421a782C90CF241F8981ebce5a760b761");
    // console.log("===== signer =====", signer);

    // ERC20 token DAI Mainnet instance
    // const DAI = contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");

    // Approve 100 DAI to LendingPool address
    // DAI.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));
    await tokenContract.connect(signer).approve(lendingPool.address, ethers.utils.parseUnits('100'));

    // Deposit 100 DAI
    await lendingPool.connect(signer).deposit(tokenContract.address, ethers.utils.parseUnits('100'), '0x4CBeD43421a782C90CF241F8981ebce5a760b761', '0');



    // You can impersonate any Ethereum address
    //await network.provider.request({ method: "hardhat_impersonateAccount",  params: ["0xb1adceddb2941033a090dd166a462fe1c2029484"]});



    // await DRE.ethers.getSigners()

    // Deposit 10000 DAI
    // await tokenContract.connect(user.signer).mint(daiSize);
    // await dai.connect(user.signer).approve(pool.address, daiSize);
    // await pool.connect(user.signer).deposit(dai.address, daiSize, user.address, '0');

    // tokenContract.connect(user.signer).mint(daiSize);
    // dai.connect(user.signer).approve(pool.address, daiSize);
    // pool.connect(user.signer).deposit(dai.address, daiSize, user.address, '0');

    console.log("hello, world");
}

const deposit2 = async () => {
    const depositor = "0x4CBeD43421a782C90CF241F8981ebce5a760b761";
    const borrower  = "0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6";

    const daiSize = 10 //parseEther('10000');

    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    //const provider = new ethers.providers.JsonRpcProvider();
    //console.log("===== provider =====", provider);

    const signer = provider.getSigner("0x4CBeD43421a782C90CF241F8981ebce5a760b761");
    // const signer = provider.getSigner();
    console.log('signer: ', signer);
    console.log('signer.getAddress(): ', await signer.getAddress());

    console.log("getBlockNumber: ", await provider.getBlockNumber());

    // The Contract object
    const tokenContract = new ethers.Contract(tokenTESTAddress, tokenTESTABI, provider);
    console.log("tokenContract: ", tokenContract.address);

    const lendingPoolAddressesProvider = new ethers.Contract(lendingPoolAddressesProviderAddress, lendingPoolAddressesProviderABI, provider);
    const lendingPool = new ethers.Contract(lendingPoolAddress, lendingPoolABI, provider);

    const eth = ethers.utils.parseUnits('100')
    console.log("eth: ", eth);

    console.log('TEST balanceOf 348: ', await tokenContract.balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019"));
    console.log('TEST balanceOf 4CB: ', await tokenContract.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761"));
    console.log('TEST balanceOf aa0: ', await tokenContract.balanceOf("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6"));

    // Address                                    Public Key                                                            Private Key
    // 0x34862f8e6b077FA6C95B3CD291AC6405b623a019	0x0338986b8cb1d9e126b3ffcce802087343c7934ca92c28162bf8d82d18917c0ddf	0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a
    // 0x4CBeD43421a782C90CF241F8981ebce5a760b761	0x038b2deeb81d441b90405ea1693140744228e3dde52e27c13b050b4c35ee305b6a	0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0
    // 0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6	0x0389893dba367ded0b094d7c18414df8fc2b2cc87b6f66f850b785b5fa522d6a53	0xac0dc399e43f5d5a9e64e21d03ec221cdd69066d925741d9541acf8df5211a15
    
    const PRIVATE_KEY = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const from = ""; //{ address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
    // address asset      = 0x2467F0d625167D0599E21f8A7f8E05De99B539bf
    // uint256 amount     = 12
    // address onBehalfOf = 0x34862f8e6b077FA6C95B3CD291AC6405b623a019
    // pool.deposit(asset, amount, onBehalfOf, 0); 0 - referralCode

    const amount = 10;
    const onBehalfOf = depositor; //"0x34862f8e6b077FA6C95B3CD291AC6405b623a019";
    const referralCode = 0;

    // ============================

    console.log('name: ', await tokenContract.name());
    console.log('symbol: ', await tokenContract.symbol());
    console.log('balanceOf 348: ', await tokenContract.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761"));
    console.log('decimals: ', await tokenContract.decimals());
    console.log('totalSupply: ', await tokenContract.totalSupply());

    const PRIVATE_KEY1 = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const from1 = ""; //{ address: from1 } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
    //console.log("tokenContract: ", tokenContract);
    const query1 = await tokenContract.approve(lendingPoolAddress, amount);
    console.log('query1: ', query1);
  
    const transaction1 = {
      to: tokenContract._address,
      from,
      value: '0',
      data: query1.encodeABI(),
      gasPrice: web3.utils.toWei('20', 'gwei'),
      gas: Math.round((await query1.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
      nonce: await web3.eth.getTransactionCount(from1, 'pending')
    }
  
    const signed1 = await web3.eth.accounts.signTransaction(transaction1, PRIVATE_KEY)
  
    const hash1 = await web3.eth.sendSignedTransaction(signed1.rawTransaction)
    console.log("status: ", hash1.status)
    console.log('allowance: ', await tokenContract.methods.allowance(depositor, lendingPoolAddress).call());

    console.log('lendingPool.getReservesList: ', await lendingPool.methods.getReservesList().call());

    // ============================
    const query = await lendingPool.methods.deposit(tokenContract._address, amount, onBehalfOf, '0');
    // console.log("query: ", query)
    console.log("from: ", from);
    console.log("depositor: ", depositor);
    const transaction = {
      to: lendingPoolAddress,
      from,
      value: '0',
      data: query.encodeABI(),
      gasPrice: web3.utils.toWei('1', 'gwei'),
      gas: 12000000, //Math.round((await query.estimateGas({ from })) * 12), // 1.5 coefficient, just make sure that gas amount is enough
      nonce: await web3.eth.getTransactionCount(from, 'pending')
    }
  
    console.log("signTransaction...")
    var signed;
    try {
      signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY)
      console.log("signed: ", signed)
  
    } catch(error) {
      console.log("error: ", error);
    }
  
    try {
      console.log("sendSignedTransaction...")
      const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction)
      console.log("status: ", hash.status)
  
    } catch(error) {
      console.log("error: ", error);
    }
  }

(async () => {
    console.log('\n--- deposit ---');
    await deposit2();
    console.log("finished");
  })();