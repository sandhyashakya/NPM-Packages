import { FEE_PAYMENT_STATUS, PAYMENT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeesCollectionModelAttributes extends IDefaultAttributes {
    id: string;
    date: Date;
    feeAmount?: number;
    paymentType?: PAYMENT_TYPE;
    bankName?: string | null;
    chequeNo?: string | null;
    userId: string;
    academicCalendarId: string;
    instituteId: string;
    upiId?: string | null;
    status?: FEE_PAYMENT_STATUS;
    discount?: number;
    paidFee?: number;
    dueDate?: Date;
    isLeft: boolean;
}
