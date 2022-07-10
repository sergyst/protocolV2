import { task } from 'hardhat/config';
import {
  loadPoolConfig,
  ConfigNames,
  getWrappedNativeTokenAddress,
} from '../../helpers/configuration';
import { deployPermissionedWETHGateway, deployWETHGateway } from '../../helpers/contracts-deployments';
import { getFirstSigner, getPermissionManager } from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

const CONTRACT_NAME = 'WETHGateway';

task(`full-deploy-permissions-citi`, `Deploys the ${CONTRACT_NAME} contract`)
  .addParam('pool', `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`)
  .addFlag('verify', `Verify ${CONTRACT_NAME} contract via Etherscan API.`)
  .setAction(async ({ verify, pool }, localBRE) => {
    await localBRE.run('set-DRE');
    const poolConfig = loadPoolConfig(pool);
    const Weth = await getWrappedNativeTokenAddress(poolConfig);

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }
    const deployer = await getFirstSigner();
    const deployerAddress = await deployer.getAddress();

    //adding permissions to the permission manager for the weth gateway
    const permissionManager = await getPermissionManager();

    //const DEPOSITOR = 0, BORROWER = 1, LIQUIDATOR = 2;
    // 0x34862f8e6b077FA6C95B3CD291AC6405b623a019
    // 0x4CBeD43421a782C90CF241F8981ebce5a760b761
    // 0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6
    const depositor = "0x4CBeD43421a782C90CF241F8981ebce5a760b761";
    const borrower  = "0xaa0233b633ef4A9eC1E03D3788449d2a249eFDf6";

    console.log(`\deployerAddress: ${deployerAddress}`);
    await waitForTx(await permissionManager.addPermissionAdmins([deployerAddress]));

    // await waitForTx(await permissionManager.connect(deployer).addPermissions([0, 1],[depositor, borrower]));
    await waitForTx(await permissionManager.connect(deployer).addPermissions([0, 0],[depositor, borrower]));
    await waitForTx(await permissionManager.connect(deployer).addPermissions([1, 1],[depositor, borrower]));
    // await waitForTx(await permissionManager.connect(deployer).addPermissions(
    //   [0, 0, 1, 1], [depositor, borrower, depositor, borrower]));
    //await waitForTx(await permissionManager.connect(deployer).addPermissions([0, 1],[borrower, borrower]));

    //await waitForTx(await permissionManager.removePermissionAdmins([deployerAddress]));
    
    console.log(`\tFinished ${CONTRACT_NAME} deployment`);
  });
