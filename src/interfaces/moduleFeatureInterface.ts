import { APP_TYPE, COMMAN_STATUS } from '../constants/app';
// import { TModuleFeatureCreationAttributes } from '../types/moduleFeatureType';
import { IDefaultAttributes } from './commanInterface';

export interface IModuleFeatureAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    isDefault?: boolean;
    status?: COMMAN_STATUS;
    moduleId: string;
    roleId?: string;
    appType?: APP_TYPE;
    code?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
