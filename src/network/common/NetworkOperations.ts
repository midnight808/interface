import { ReactNode } from 'react';
import { Observable } from 'rxjs';

import { AmmPool } from '../../common/models/AmmPool';
import { Currency } from '../../common/models/Currency';
import { Farm } from '../../common/models/Farm';
import { TxId } from '../../common/types';
import { AddLiquidityFormModel } from '../../components/AddLiquidityForm/AddLiquidityFormModel';
import { CreatePoolFormModel } from '../../pages/CreatePool/CreatePoolFormModel';
import { RemoveLiquidityFormModel } from '../../pages/RemoveLiquidity/RemoveLiquidityFormModel';
import { SwapFormModel } from '../../pages/Swap/SwapFormModel';

export interface NetworkOperations {
  swap(data: Required<SwapFormModel>): Observable<TxId>;
  lmRedeem(
    farm: Farm,
    createFarmModal: (
      children?: ReactNode | ReactNode[] | string,
    ) => ReactNode | ReactNode[] | string,
  ): Observable<TxId>;
  lmDeposit(
    farm: Farm,
    createFarmModal: (
      children?: ReactNode | ReactNode[] | string,
    ) => ReactNode | ReactNode[] | string,
  ): Observable<TxId>;
  deposit(
    data: Required<AddLiquidityFormModel>,
    withoutConfirmation?: boolean,
  ): Observable<TxId>;
  createPool(data: Required<CreatePoolFormModel>): Observable<TxId>;
  redeem(
    pool: AmmPool,
    data: Required<RemoveLiquidityFormModel>,
    withoutConfirmation?: boolean,
  ): Observable<TxId>;
  refund(txId: TxId, xAmount: Currency, yAmount: Currency): Observable<TxId>;
}
