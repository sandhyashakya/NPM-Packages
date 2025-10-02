import { FEE_HISTORY_STATUS, PAYMENT_TERMS_STATUS, PAYMENT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasFeeTermsModelAttributes extends IDefaultAttributes {
    id: string;
    date?: Date;
    startDate: Date;
    endDate?: Date;
    paidAmount: number;
    amount: number;
    status: PAYMENT_TERMS_STATUS;
    instituteId: string;
    bankAccountId: string;
    userId: string;
    feeCollectionId: string;
    feeTypeId: string;
    stdId: string;
    academicCalendarId: string;
}

export interface IUserPayFeeAttributes {
    id: string;
    feesData: {
        paidFee: number;
        discount?: number;
        feeCollectionId: string;
        academicCalendarId: string;
        date?: Date;
        userId: string;
        instituteId: string;
        feeTypeId: string;
        stdId?: string;
    }[];
    paymentType: PAYMENT_TYPE;
    chequeNo: string;
    bankName: string;
    upiId?: string;
    status?: FEE_HISTORY_STATUS;
}
