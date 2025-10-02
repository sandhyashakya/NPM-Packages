import { PAYMENT_TERMS_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeeTypeHasTermsModelAttributes extends IDefaultAttributes {
    id: string;
    stdId: string;
    feeTypeId: string;
    frequency: PAYMENT_TERMS_TYPE;
    amount: number;
    date: Date;
    instituteId: string;
    academicCalendarId: string;
}
