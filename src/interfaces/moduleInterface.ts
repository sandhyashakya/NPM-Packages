import { APP_TYPE, COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IModuleAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    roleId?: string;
    isDefault?: boolean;
    code?: string;
    appType?: APP_TYPE;
    status?: COMMAN_STATUS;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
