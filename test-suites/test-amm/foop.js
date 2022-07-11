require('dotenv').config();
const Tx = require("@ethereumjs/tx").Transaction;
const Common = require("@ethereumjs/common").default;
const { Chain, CustomChain, Hardfork } = require("@ethereumjs/common");
var Web3 = require('web3')

console.log("API_URL: ", process.env.API_URL);
console.log("ACCOUNT: ", process.env.ACCOUNT);

const tokenTKNSABI = require("./contracts/TKNS.json");
const tokenTKNSAddress = "0x2467F0d625167D0599E21f8A7f8E05De99B539bf";

const tokenTESTABI = require("./contracts/TEST.json");
const tokenTESTAddress = "0xC702932fC75645322c682Bd6B4d58c538cAdCd7b";

const lendingPoolAddressesProviderABI = require("./contracts/ILendingPoolAddressesProvider.json");
const lendingPoolAddressesProviderAddress = "0xb8cdFb73C1C410cb395A414231958348F315D706";

const lendingPoolABI = require("./contracts/ILendingPool.json");

var web3;
var tokenTKNSContract;
var tokenTESTContract;
var lendingPoolAddressesProvider;
    
const initializeWeb3 = async () => {
  try {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL));
    let block = await web3.eth.getBlockNumber();
    console.log('block: ', block);

  } catch (error) {}
};

const getAccountBalance = async (account) => {
  try {
    console.log('account: ', account);
    console.log('balance: ', await web3.eth.getBalance(account), ' wei');

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const initializeContracts = async () => {
  try {
    tokenTKNSContract = new web3.eth.Contract(tokenTKNSABI, tokenTKNSAddress);
    tokenTESTContract = new web3.eth.Contract(tokenTESTABI, tokenTESTAddress);
    lendingPoolAddressesProvider = new web3.eth.Contract(lendingPoolAddressesProviderABI, lendingPoolAddressesProviderAddress);

    // console.log("tokenTESTContract: ", tokenTESTContract._address);
    console.log('tokenTKNS balance: ', await web3.eth.getBalance(tokenTKNSAddress), ' wei');
    console.log('tokenTEST balance: ', await web3.eth.getBalance(tokenTESTAddress), ' wei');
    console.log('lendingPoolAddressesProvider balance: ', await web3.eth.getBalance(lendingPoolAddressesProviderAddress), ' wei');

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTxCount = async (account) => {
  try {
    return await web3.eth.getTransactionCount(account);

  } catch (error) {
    throw error;
  }
};

const addNewUser = async () => {
  try {
    const newUser = await web3.eth.accounts.create();
    const details = await web3.eth.accounts.wallet.add({
      privateKey: newUser.privateKey,
      address: newUser.address,
    });
    console.log(newUser);
  } catch (error) {
    throw error;
  }
};

const encodeData = async (contractInstance, method, data) => {
  try {
    const encodedData = await contractInstance.methods[method](
      ...data
    ).encodeABI();
    return encodedData;
  } catch (error) {
    throw error;
  }
};

const getTx = async (txCount, data, userKeypair) => {
  try {
    const txObject = {
      chainId: 5,
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
      from: userKeypair.address,
      gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      to: rideContractAddress,
      data: data,
    };

    let tx = new Tx(txObject, { common });

    const pvtBuffer = Buffer.from(userKeypair.privateKey, "hex");
    tx = tx.sign(pvtBuffer);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    return raw;
  } catch (error) {
    throw error;
  }
};

const mint_ = async () => {
  try {
    console.log('name: ', await tokenTKNSContract.methods.name().call());
    console.log('symbol: ', await tokenTKNSContract.methods.symbol().call());
    console.log('balanceOf: ', await tokenTKNSContract.methods.balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019").call());
    console.log('decimals: ', await tokenTKNSContract.methods.decimals().call());
    console.log('totalSupply: ', await tokenTKNSContract.methods.totalSupply().call());

    console.log('name: ', await tokenTESTContract.methods.name().call());
    console.log('symbol: ', await tokenTESTContract.methods.symbol().call());
    console.log('balanceOf: ', await tokenTESTContract.methods.balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019").call());
    console.log('decimals: ', await tokenTESTContract.methods.decimals().call());
    console.log('totalSupply: ', await tokenTESTContract.methods.totalSupply().call());

    // console.log(tokenTKNSContract.methods['mint']);
    let mintResult //= await tokenTKNSContract.methods.mint().send({from: process.env.ACCOUNT});
    // .on('receipt', function() {
    //   console.log('receipt');
    // });
    console.log('mintResult: ', mintResult);

    // call: [Function: bound _executeMethod] {
    //   request: [Function: bound _executeMethod]
    // },
    // send: [Function: bound _executeMethod] {
    //   request: [Function: bound _executeMethod]
    // },

    let estimateGas = await tokenTKNSContract.methods.mint().estimateGas({ from: process.env.ACCOUNT });
    console.log('estimateGas: ', estimateGas);

    let userKeypair = {
      address: "0x3A91A79e11CA724A7ec7ca85E121C1a8Ab820493",
      privateKey: "0xa56a30710319f142252b8fecfa036733aac415fbdc6b6e14fa44dfea837e6e1f",
    };

    // const txCount = await getTxCount(userKeypair.address);
    // // To estimate Gas
    // const estimateGasPrice = await rideContract.methods.requestRide(10000, 20, "BLR", "medium", 200, [
    //     "0x17b0AD33868FBEd9bd8a305371bfF48E5060f7dF",
    //   ])
    //   .estimateGas({ from: userKeypair.address });

    // console.log({
    //   estimateGasPrice: web3.utils.toWei(`${estimateGasPrice}`, "gwei"),
    //   sendGas: web3.utils.toWei("10", "gwei"),
    // });

    // const data = await encodeData(rideContract, "requestRide", [
    //   10000,
    //   20,
    //   "blr",
    //   "medium",
    //   200,
    //   ["0xA47ca80294EDDbe0CbA8c5B3Ce76205C8180ed07"],
    // ]);

  } catch (error) {
    console.log(error);
    throw error;
  }
};

const mint_1 = async (tokenContract) => {
  // const myAddress = '0x3A91A79e11CA724A7ec7ca85E121C1a8Ab820493' //TODO: replace this address with your own public address
 
  // const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0
  // console.log("nonce: ", nonce);

  // const transaction = {
  //   'to': '0x4CBeD43421a782C90CF241F8981ebce5a760b761', // faucet address to return eth
  //   'value': 1,
  //   'gas': 30000,
  //   'maxFeePerGas': 10000000000,
  //   'nonce': nonce,
  //   // optional data field to send message or execute smart contract
  // };
 
  // const signedTx = await web3.eth.accounts.signTransaction(transaction, "0xa56a30710319f142252b8fecfa036733aac415fbdc6b6e14fa44dfea837e6e1f");
  
  // web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
  //   if (!error) {
  //     console.log("The hash of your transaction is: ", hash, "\n Check Mempool to view the status of your transaction!");
  //   } else {
  //     console.log("Something went wrong while submitting your transaction:", error)
  //   }
  // });

  // const myAddress = '0x3A91A79e11CA724A7ec7ca85E121C1a8Ab820493' //TODO: replace this address with your own public address
  // var privateKey = Buffer.from('6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a', 'hex');

  // var rawTx = {
  //   nonce: '0x00',
  //   gasPrice: '0x09184e72a000',
  //   gasLimit: '0x2710',
  //   to: '0x4CBeD43421a782C90CF241F8981ebce5a760b761',
  //   value: '0x1',
  //   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
  // }
  
  // // var tx = new Tx(rawTx, {'chain': 'ropsten'});
  // var tx = new Tx(rawTx, {});
  // tx.sign(privateKey);
  
  // var serializedTx = tx.serialize();
  
  // // console.log(serializedTx.toString('hex'));
  // // 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f
  
  // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  // .on('receipt', console.log);



  //const CONTRACT_ADDRESS = tokenTKNSAddress
  const PRIVATE_KEY = '0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a'
  const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)

  const query = await tokenContract.methods.mint()

  const transaction = {
    to: tokenContract._address,
    from,
    value: '0',
    data: query.encodeABI(),
    gasPrice: web3.utils.toWei('20', 'gwei'),
    gas: Math.round((await query.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
    nonce: await web3.eth.getTransactionCount(from, 'pending')
  }

  const signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY)

  const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction)
  console.log(hash)
  
  

  // console.log("signTransaction");
  // let signedTx = await web3.eth.accounts.signTransaction({
  //   to: '0x4CBeD43421a782C90CF241F8981ebce5a760b761',
  //   value: '10',
  //   gas: 2000000
  // }, '0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a');
  // console.log("signedTx: ", signedTx);

  // console.log("sendSignedTransaction");
  // let result = await web3.eth.sendSignedTransaction(signedTx);
}

const send_raw_transaction = async () => {
    transaction = {
        'to': '0x4CBeD43421a782C90CF241F8981ebce5a760b761',
        'value': 10,
        'gas': 2000000,
        'maxFeePerGas': 2000000000,
        'maxPriorityFeePerGas': 1000000000,
        'nonce': 0,
        'chainId': 1337,
        //'type': '0x2',   // the type is optional and, if omitted, will be interpreted based on the provided transaction parameters
        // 'accessList':   // accessList is optional for dynamic fee transactions
            // {
                // 'address': '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
                // 'storageKeys': (
                    // '0x0000000000000000000000000000000000000000000000000000000000000003',
                    // '0x0000000000000000000000000000000000000000000000000000000000000007',
                // )
            // },
            // {
                // 'address': '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
                // 'storageKeys': ()
            // },
        // )
    }
    key = '0xa56a30710319f142252b8fecfa036733aac415fbdc6b6e14fa44dfea837e6e1f';
    signed = await web3.eth.accounts.signTransaction(transaction, key);
    console.log("signed: ", signed);
    
//    console.log("web3.eth: ", web3.eth);
    console.log("web3.eth.accounts: ", web3.eth.accounts);

    // When you run send_raw_transaction, you get back the hash of the transaction:
    let hashTransaction = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    console.log("hashTransaction: ", hashTransaction);
    //'0xe85ce7efa52c16cb5c469c7bde54fbd4911639fdfde08003f65525a85076d915'
  }

  const mint = async (tokenContract) => {
    console.log('name: ', await tokenContract.methods.name().call());
    console.log('symbol: ', await tokenContract.methods.symbol().call());
    console.log('balanceOf: ', await tokenContract.methods.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761").call());
    console.log('decimals: ', await tokenContract.methods.decimals().call());
    console.log('totalSupply: ', await tokenContract.methods.totalSupply().call());

    const PRIVATE_KEY = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
    const query = await tokenContract.methods.mint()
  
    const transaction = {
      to: tokenContract._address,
      from,
      value: '0',
      data: query.encodeABI(),
      gasPrice: web3.utils.toWei('20', 'gwei'),
      gas: Math.round((await query.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
      nonce: await web3.eth.getTransactionCount(from, 'pending')
    }
  
    const signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY)
  
    const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction)
    console.log("hash: ", hash)
  }

  const mint2 = async () => {
    let tokenContract = tokenTESTContract

    console.log('name: ', await tokenContract.methods.name().call());
    console.log('symbol: ', await tokenContract.methods.symbol().call());
    console.log('balanceOf 348: ', await tokenContract.methods.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761").call());
    console.log('decimals: ', await tokenContract.methods.decimals().call());
    console.log('totalSupply: ', await tokenContract.methods.totalSupply().call());

    const PRIVATE_KEY = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
    //console.log("tokenContract: ", tokenContract);
    const query = await tokenContract.methods.mint(100)
  
    const transaction = {
      to: tokenContract._address,
      from,
      value: '0',
      data: query.encodeABI(),
      gasPrice: web3.utils.toWei('20', 'gwei'),
      gas: Math.round((await query.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
      nonce: await web3.eth.getTransactionCount(from, 'pending')
    }
  
    const signed = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY)
  
    const hash = await web3.eth.sendSignedTransaction(signed.rawTransaction)
    console.log("status: ", hash.status)
  }

  const deposit = async () => {
    const depositor = "0x4CBeD43421a782C90CF241F8981ebce5a760b761";
    const borrower  = "0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6";

    console.log("lendingPoolAddressesProvider: "); //, lendingPoolAddressesProvider);

    // console.log('TKNS balanceOf 348: ', await tokenTKNSContract.methods.balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019").call());
    // console.log('TKNS balanceOf 4CB: ', await tokenTKNSContract.methods.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761").call());
    // console.log('TKNS balanceOf aa0: ', await tokenTKNSContract.methods.balanceOf("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6").call());
    // console.log();
    console.log('TEST balanceOf 348: ', await tokenTESTContract.methods.balanceOf("0x34862f8e6b077FA6C95B3CD291AC6405b623a019").call());
    console.log('TEST balanceOf 4CB: ', await tokenTESTContract.methods.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761").call());
    console.log('TEST balanceOf aa0: ', await tokenTESTContract.methods.balanceOf("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6").call());

    let lendingPoolAddress = await lendingPoolAddressesProvider.methods.getLendingPool().call();
    console.log('lendingPoolAddress: ', lendingPoolAddress);

    let lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddress);
    //console.log('lendingPool: ', lendingPool);

    // Address                                    Public Key                                                            Private Key
    // 0x34862f8e6b077FA6C95B3CD291AC6405b623a019	0x0338986b8cb1d9e126b3ffcce802087343c7934ca92c28162bf8d82d18917c0ddf	0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a
    // 0x4CBeD43421a782C90CF241F8981ebce5a760b761	0x038b2deeb81d441b90405ea1693140744228e3dde52e27c13b050b4c35ee305b6a	0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0
    // 0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6	0x0389893dba367ded0b094d7c18414df8fc2b2cc87b6f66f850b785b5fa522d6a53	0xac0dc399e43f5d5a9e64e21d03ec221cdd69066d925741d9541acf8df5211a15
    
    const PRIVATE_KEY = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const { address: from } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
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

    let tokenContract = tokenTESTContract

    console.log('name: ', await tokenContract.methods.name().call());
    console.log('symbol: ', await tokenContract.methods.symbol().call());
    console.log('balanceOf 348: ', await tokenContract.methods.balanceOf("0x4CBeD43421a782C90CF241F8981ebce5a760b761").call());
    console.log('decimals: ', await tokenContract.methods.decimals().call());
    console.log('totalSupply: ', await tokenContract.methods.totalSupply().call());

    const PRIVATE_KEY1 = '0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0'
    const { address: from1 } = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY)
  
    //console.log("tokenContract: ", tokenContract);
    const query1 = await tokenContract.methods.approve(lendingPoolAddress, amount);
  
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



    // console.log("xxxxx...1")
    // const signer = await web3.provider.getSigner("0x4CBeD43421a782C90CF241F8981ebce5a760b761")
    // console.log("xxxxx...2")

    // // ERC20 token DAI Mainnet instance
    // // const DAI = await contractGetters.getIErc20Detailed("0x6B175474E89094C44Da98b954EedeAC495271d0F");
    
    // // Approve 10 to LendingPool address
    // await tokenContract.connect(signer).approve(lendingPool.address, web3.utils.parseUnits('10'));
    // console.log("xxxxx...3")
    
    // // Deposit 10
    // await lendingPool.connect(signer).deposit("0xC702932fC75645322c682Bd6B4d58c538cAdCd7b",
    // web3.utils.parseUnits('10'), await signer.getAddress(), '0');
    // console.log("xxxxx...4")

    


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
  console.log('\n--- initializeWeb3 ---');
  await initializeWeb3();
  console.log('\n--- getAccountBalance ---');
  await getAccountBalance("0x34862f8e6b077FA6C95B3CD291AC6405b623a019");
  await getAccountBalance("0x4CBeD43421a782C90CF241F8981ebce5a760b761");
  await getAccountBalance("0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6");
  console.log('\n--- initializeContracts ---');
  await initializeContracts();
  // console.log('\n--- mint(tokenTKNSContract) ---');
  // await mint(tokenTKNSContract);
  // console.log('\n--- mint2 ---');
  // await mint2();
  console.log('\n--- deposit ---');
  await deposit();
})();