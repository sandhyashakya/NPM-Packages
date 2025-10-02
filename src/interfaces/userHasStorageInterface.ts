import { WALLET_HISTORY_ACTION } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasStorageModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    walletId: string;
    walletTransactionId: string;
    storageInGb: number;
    storageInBytes: number;
    action: WALLET_HISTORY_ACTION;
}
