
To launch hardhat console connected to your private chain
    npm run compile
    npx hardhat --network citi console
    run("set-DRE")
​
Deploy mockERC20 using console
    const deploymentHelpers = require('./helpers/contracts-deployments')
    await deploymentHelpers.deployMintableERC20(['TEST','TEST','18'], false)
    // await deploymentHelpers.deployMintableERC20(['TEST','TEST','2'], false)
    // await deploymentHelpers.deployMintableERC20(['TEST','TEST','0'], false)
    // await deploymentHelpers.deployMintableERC20(['AAAA','AAAA','18'], false)
    Use the address of token in above step while configuring markets in index.ts​ (`ReserveAssets` field)
    
Deploy mock aggregator with custom price (first param) corresponding to each token
    const mockHelpers = require('./helpers/oracles-helpers')
    await mockHelpers.deployMockAggregators({TEST: '12345678'}, false)
    // await mockHelpers.deployMockAggregators({TEST: '123'}, false)
    // await mockHelpers.deployMockAggregators({TEST: '12345678', AAAA: '12345678'}, false)
    Use the address of mock aggregator in above step in commons.ts​ (`ChainlinkAggregator` field)

    npm run citi:privatenet:full:migration

grant the addresses you need. You can take this script as inspiration:
https://github.com/aave/protocol-v2/blob/feat/permissioned-market/tasks/permissioned/deploy-permissioned-wethGateWay.ts


PermissionManager: 0x6e622f23815c4a3c50528b7eF54B87A627aeC319 

Grant yourself as Whitelister, using the addPermissionAdmins function of the PermissionManager:
https://github.com/aave/protocol-v2/blob/feat/permissioned-market/contracts/protocol/configuration/PermissionManager.sol
 
    await waitForTx(await permissionManager.addPermissionAdmins([deployerAddress]));

Grant the users of the system as Depositors and/or Borrowers, using the addPermissions function of the PermissionManager.

const DEPOSITOR = 0, BORROWER = 1, LIQUIDATOR = 2;
    await waitForTx(await permissionManager.connect(deployer).addPermissions([0, 1],[deployerAddress, deployerAddress] ));

var permissionManager = new myweb3.eth.Contract(permissionManagerAbi, "0x6e622f23815c4a3c50528b7eF54B87A627aeC319");
var pool = new myweb3.eth.Contract(poolAbi, "0x0486F0f2c43e0830BA3CDE221B3F9965f91B7d50");


Start integrating/using features like deposit, borrow, repay and so on. Those are exposed in the LendingPool contract:
https://github.com/aave/protocol-v2/blob/feat/permissioned-market/contracts/protocol/lendingpool/LendingPool.sol#L104
Image removed by sender.
 
There is also the possibility of deploying the interface: https://github.com/aave/aave-ui


Path                Address                                     Public Key                                                              Private Key
m/44'/60'/0'/0/0	0x34862f8e6b077FA6C95B3CD291AC6405b623a019	0x0338986b8cb1d9e126b3ffcce802087343c7934ca92c28162bf8d82d18917c0ddf	0x6cc4073de8b8796b23488eab6a52adf91bd9e822b51e3207f5f378a2b668df6a
m/44'/60'/0'/0/1	0x4CBeD43421a782C90CF241F8981ebce5a760b761	0x038b2deeb81d441b90405ea1693140744228e3dde52e27c13b050b4c35ee305b6a	0x0a8868a4b28fc0a1e8801a98e81e2094e894644019d0d18d1cfce4b468bc0af0
m/44'/60'/0'/0/2	0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6	0x0389893dba367ded0b094d7c18414df8fc2b2cc87b6f66f850b785b5fa522d6a53	0xac0dc399e43f5d5a9e64e21d03ec221cdd69066d925741d9541acf8df5211a15



Remix
-----
methods calls: addPermissionAdmins, deposit

Gas estimation failed
Gas estimation errored with the following message (see below). The transaction execution will likely fail. Do you want to force sending?
Internal JSON-RPC error. { "code": -32000, "message": "Execution reverted", "data": "0x" }



Miguel
------
Q: Calling to "tokenContract.methods.approve(lendingPool._address, amount)" only for deposit or for borrow too?
A: Depends on the action and token. I suggest you to understand how the ERC20 works.

Q: borrow
A: For borrow you need to:
    - have been granted as borrower
    - have enough collateral deposited
    - there should enough liquidity to pull from the pool

1. The aToken address is not the same as the token address. The Token address is called "underlying" in the system. For example, the DAI reserve has DAI as underlying and has its aToken, variableDebtToken and stableDebtToken.
2. You can use functions of the contract `AaveProtocolDataProvider` to get information of the reserve. Use `getReserveConfigurationData` to check if borrowing is enabled (passing the address of the token).
3. You can use `AaveProtocolDataProvider.getReserveData()` to get the availably liquidty of a reserve.
4. You can use `LendingPool.getUserAccountData()` to query the total collateral in ETH, total debt in ETH, borrowing power left and health factor (should be >1 to stay solvent)

- After depositing, the totalCollateralETH of the depositor address should be >0. 
- Whats the price of TEST? You can check it using the functions of the AaveOracle.
  If its 0 you should give a price using your mockOracle.
  What code are you using for your mock oracle?
  Is there a function to set the price of the asset?
- If you want to borrow you need to deposit first.

Try to deposit a large amount. TEST has 18 decimals (is the default amount of decimals in a ERC20), so you are depositing a tiny amount. Try with 10e18 for example.

errors:
-------
mint(depositor, 10000000000000000)
cause:
Error: overflow [ See: https://links.ethers.org/v5-errors-NUMERIC_FAULT-overflow ] (fault="overflow", operation="BigNumber.from", value=10000000000000000, code=NUMERIC_FAULT, version=bignumber/5.6.2)

mint(depositor, 1000000000000000) - OK // 10e15
----
after fail to borrower, the borrower thread stack even on 'mint'
