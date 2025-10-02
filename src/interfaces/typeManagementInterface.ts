import { COMMAN_STATUS, TYPE_MANAGEMENT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITypeManagementModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    instituteId?: string;
    status?: COMMAN_STATUS;
    type: TYPE_MANAGEMENT_TYPE;
    isInstituteDefault?: boolean;
    isDefault?: boolean;
}
