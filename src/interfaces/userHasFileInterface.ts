import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS, FILE_TYPE } from '../constants/app';

export interface IUserHasFileModelAttributes extends IDefaultAttributes {
    id: string;
    userId?: string;
    instituteId?: string;
    fileType: FILE_TYPE;
    status?: COMMAN_STATUS;
    fileName: string;
    fileStorageId: string;
}
