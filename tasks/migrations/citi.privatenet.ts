import { task } from 'hardhat/config';
import { checkVerification } from '../../helpers/etherscan-verification';
import { ConfigNames } from '../../helpers/configuration';
import { printContracts } from '../../helpers/misc-utils';

task('citi:privatenet', 'Deploy development enviroment')
  .addFlag('verify', 'Verify contracts at Etherscan')
  .addFlag('skipRegistry', 'Skip addresses provider registration at Addresses Provider Registry')
  .setAction(async ({ verify, skipRegistry }, DRE) => {
    const POOL_NAME = ConfigNames.Citi;
    await DRE.run('set-DRE');

    // Prevent loss of gas verifying all the needed ENVs for Etherscan verification
    if (verify) {
      checkVerification();
    }

    console.log('Citi Migration started\n');

    console.log('1. Deploy address provider');
    await DRE.run('full:deploy-address-provider', { pool: POOL_NAME, skipRegistry });

    console.log('2. Deploy permissions manager');
    await DRE.run('deploy-permission-manager', { pool: POOL_NAME });

    console.log('3. Deploy lending pool');
    await DRE.run('full:deploy-lending-pool', { pool: POOL_NAME });

    console.log('4. Deploy oracles');
    await DRE.run('full:deploy-oracles', { pool: POOL_NAME });

    console.log('5. Deploy Data Provider');
    await DRE.run('full:data-provider', { pool: POOL_NAME });

    // console.log('6. Deploy WETH Gateway');
    // await DRE.run('full-deploy-weth-gateway', { pool: POOL_NAME });

    console.log('6. Deploy Permissions');
    await DRE.run('full-deploy-permissions-citi', { pool: POOL_NAME });

    console.log('7. Initialize lending pool');
    await DRE.run('full:initialize-lending-pool', { pool: POOL_NAME });

    console.log('\nFinished migrations');
    printContracts();
  });
