import { COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IWalletModelAttributes extends IDefaultAttributes {
    id: string;
    uuid: string;
    coin: number;
    storageInGb: number;
    storageInBytes: number;
    status: COMMAN_STATUS;
}
