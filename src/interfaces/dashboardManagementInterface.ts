import { Document } from 'mongoose';
import { USER_TYPES, COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IModuleList {
    sequenceNumber: number;
    moduleName: string;
    webConfig: string;
    mobileConfig: string;
    webStatus: COMMAN_STATUS;
    mobileStatus: COMMAN_STATUS;
}

export interface IDashboardManagementAttributes extends IDefaultAttributes, Document {
    id: string;
    isDefault: boolean;
    userId: string;
    instituteId: string;
    userType: USER_TYPES;
    moduleList: IModuleList[];
}
