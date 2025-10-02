import { FEE_HISTORY_STATUS, PAYMENT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeeHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    userId: string;
    // academicCalendarId: string;
    feeCollectionId?: string;
    paidFee: number;
    pdfId?: string | null;
    invoiceId?: number | null;
    status: FEE_HISTORY_STATUS;
    paidDate: Date;
    upiId?: string | null;
    paymentType?: PAYMENT_TYPE;
    bankName?: string | null;
    chequeNo?: string | null;
    feeTypeId?: string[] | null;
    bankAccountId?: string | null;
    parentHistoryId?: string | null;
    schoolFeeCollectionId?: string | null;
}
