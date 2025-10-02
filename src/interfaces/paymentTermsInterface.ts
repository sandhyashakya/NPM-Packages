import { PAYMENT_TERMS_STATUS, PAYMENT_TERMS_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IPaymentTermsModelAttributes extends IDefaultAttributes {
    id: string;
    date?: Date;
    startDate: Date;
    endDate: Date;
    paidAmount: number;
    type: PAYMENT_TERMS_TYPE;
    amount: number;
    status: PAYMENT_TERMS_STATUS;
    instituteId: string;
    userId: string;
    feeCollectionId: string;
}
