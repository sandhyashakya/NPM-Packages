import { COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasRoleAttributes extends IDefaultAttributes {
    id: string;
    roleId?: string;
    userId?: string;
    status?: COMMAN_STATUS;
    instituteId?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
