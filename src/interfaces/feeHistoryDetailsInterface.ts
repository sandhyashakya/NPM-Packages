import { PAYMENT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeeHistoryDetailsModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    feeHistoryId: string;
    userFeeTypeByAccountId: string;
    academicCalendarId: string;
    schoolFeeCollectionId: string; // school feeCollection
    userId: string;
    feeTypeId: string;
    paidFee: number;
    upiId: string;
    paymentType: PAYMENT_TYPE;
    chequeNo: string;
    bankName: string;
}
