import { IDefaultAttributes } from './commanInterface';

export interface IUserHasSubjectFeeModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    userId: string;
    academicYearId: string;
    subjectId: string;
    fee: number;
}
