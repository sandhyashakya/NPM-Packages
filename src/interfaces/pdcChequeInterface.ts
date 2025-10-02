import { PDF_CHEQUE_FREQUENCY, PDF_CHEQUE_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IPdcChequeModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    userId: string;
    depositDate: Date;
    chequeNo: string;
    amount: number;
    grNo: string;
    userFeeTypeByAccountId: string;
    status: PDF_CHEQUE_STATUS;
    bankName: string;
    frequency: PDF_CHEQUE_FREQUENCY;
    standardId: string;
}
