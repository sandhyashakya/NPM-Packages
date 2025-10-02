import { IDefaultAttributes } from './commanInterface';

export interface IUserHasRollNumberModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    rollNumber: number;
    batchId: string;
}
