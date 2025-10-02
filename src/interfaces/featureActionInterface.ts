import { APP_TYPE, COMMAN_STATUS } from '../constants/app';
// import { TFeatureActionCreationAttributes } from '../types/featureActionType';
import { IDefaultAttributes } from './commanInterface';

export interface IFeatureActionAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    isDefault?: boolean;
    status?: COMMAN_STATUS;
    featureId?: string;
    code?: string;
    appType?: APP_TYPE;
    moduleId: string;
    roleId?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
