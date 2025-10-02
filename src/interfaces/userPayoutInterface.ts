import { IDefaultAttributes } from './commanInterface';
import { USER_PAYOUT_TYPE, USER_TYPES } from '../constants/app';

export interface IUserPayoutModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    userType: USER_TYPES;
    instituteId: string;
    totalPayableAmount?: number;
    totalPaidAmount?: number;
    type: USER_PAYOUT_TYPE;
    lastCalculatedAt: Date;
}
