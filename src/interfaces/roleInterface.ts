import { APP_TYPE, COMMAN_STATUS, USER_TYPES } from '../constants/app';
import { TFeatureActionCreationAttributes } from '../types/featureActionType';
import { IDefaultAttributes } from './commanInterface';
import { TModuleFeatureCreationAttributes } from '../types/moduleFeatureType';

export interface IRoleAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    isDefault?: boolean;
    status?: COMMAN_STATUS;
    instituteId?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?: boolean;
    userType?: USER_TYPES;
    appType: APP_TYPE;
    isInstituteDefault?: boolean;
}

interface IRoleFeatureAction extends TModuleFeatureCreationAttributes {
    actions: TFeatureActionCreationAttributes[];
}
export interface ICreateRolePermissions extends TModuleFeatureCreationAttributes {
    features: IRoleFeatureAction[];
}
