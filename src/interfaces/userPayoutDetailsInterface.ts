import { IDefaultAttributes } from './commanInterface';
import { USER_PAYOUT_TYPE } from '../constants/app';

export interface IUserPayoutDetailsModelAttributes extends IDefaultAttributes {
    id: string;
    subjectId: string;
    batchId: string;
    userPayoutId: string;
    amountPerHour?: number;
    payableAmount: number;
    percentage?: number;
    type: USER_PAYOUT_TYPE;
    userId: string;
    instituteId: string;
}
