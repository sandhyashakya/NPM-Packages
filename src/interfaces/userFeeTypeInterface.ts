import { COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserFeeTypeModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    feeCollectionId: string;
    feeTypeId: string;
    status: COMMAN_STATUS;
    amount: number;
    discount: number;
    paidFee: number;
    grNumber?: string;
    rollNumber: string;
    feeCollectionAccountId: string;
}
