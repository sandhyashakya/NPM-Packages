import { IDefaultAttributes } from './commanInterface';

export interface ISubjectHasFeeModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    subjectId: string;
    fee: number;
}
