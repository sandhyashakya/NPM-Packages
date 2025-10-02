import { IDefaultAttributes } from './commanInterface';
import { IUserFeeTypeModelAttributes } from './userFeeTypeInterface';

export interface collectionHasUserFeeType {
    userFeeTypeType: IUserFeeTypeModelAttributes;
    feeTypeId: string;
}
export interface IUserFeeTypeByAccountModelAttributes extends IDefaultAttributes {
    collectionHasUserFeeType?: collectionHasUserFeeType[];
    id: string;
    userId: string;
    instituteId: string;
    bankAccountId: string;
    feeCollectionId: string;
    amount: number;
    discount: number;
    perviousFeeCollectionId: string;
    academicCalendarId: string;
    paidAmount: number;
}
