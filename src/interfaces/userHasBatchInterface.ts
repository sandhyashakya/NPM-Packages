import { IDefaultAttributes } from './commanInterface';

export interface IUserHasBatchModelAttributes extends IDefaultAttributes {
    id: string;
    batchId: string;
    userId: string;
    subjects: string[];
}
