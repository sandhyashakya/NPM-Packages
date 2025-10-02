import { Document } from 'mongoose';
import { PAYMENT_TERMS_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITermsSchema {
    date: Date;
    amount: number;
    // paidAmount: number;
}
export interface IFeeSchema {
    feeTypeId: string;
    terms: ITermsSchema[];
    totalAmount: number;
    frequency: PAYMENT_TERMS_TYPE;
    isNotApplicableForGirls: boolean;
}
export interface ISchoolFeeModelAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId: string;
    // feeTypeId: string;
    // totalAmount: number;
    stdId: string[];
    commonDueDate: number;
    // terms: ITermsSchema[];
    fees: IFeeSchema[];
}
