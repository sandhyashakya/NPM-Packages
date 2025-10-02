import { IDefaultAttributes } from './commanInterface';

export interface ISubjectHasPayFeeHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    userId: string;
    subjectId: string;
    feeCollectionId: string;
    amount: number;
}
