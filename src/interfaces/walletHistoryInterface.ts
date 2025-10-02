import { WALLET_HISTORY_ACTION, WALLET_HISTORY_ITEM_TYPE, WALLET_HISTORY_STATUS, WALLET_HISTORY_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IWalletHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    walletId: string;
    type: WALLET_HISTORY_TYPE;
    action: WALLET_HISTORY_ACTION;
    coin: number;
    totalCoin: number;
    storage: number;
    totalStorage: number;
    itemType: WALLET_HISTORY_ITEM_TYPE;
    status: WALLET_HISTORY_STATUS;
}
