import { IDefaultAttributes } from './commanInterface';
import { USER_PAYOUT_TYPE, USER_TYPES } from '../constants/app';

export interface IUserPayoutHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    userId?: string;
    userType: USER_TYPES;
    instituteId: string;
    userPayoutId: string;
    payableAmount: number;
    paidAmount: number;
    overtimeAmount?: number;
    bonusAmount?: number;
    payoutDate: Date;
    payoutStartTime: Date;
    payoutEndTime: Date;
    payoutType: USER_PAYOUT_TYPE;
    description?: string;
}
