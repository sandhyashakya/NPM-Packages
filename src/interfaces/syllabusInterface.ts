import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface ISyllabusModelAttributes extends IDefaultAttributes {
    fileStorageId: string;
    // fileStorageId: string [];
    status: COMMAN_STATUS;
    instituteId: string;
    subjectId: string;
    id: string;
}
