import { eContractid, IReserveParams } from '../../helpers/types';

import { rateStrategyTEST } from './rateStrategies';


export const strategyTEST: IReserveParams = {
  strategy: rateStrategyTEST,
  baseLTVAsCollateral: '5000',
  liquidationThreshold: '6500',
  liquidationBonus: '11000',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  stableDebtTokenImpl: eContractid.PermissionedStableDebtToken,
  variableDebtTokenImpl: eContractid.PermissionedVariableDebtToken,
  reserveFactor: '0'
};
