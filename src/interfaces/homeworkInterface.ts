import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IHomeWorkModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    description?: string;
    status: COMMAN_STATUS;
    batchId: string;
    subjectId: string;
    fileStorageId: string[];
    submissionDate: Date;
    instituteId: string;
}
