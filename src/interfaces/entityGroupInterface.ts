import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IEntityGroupModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    standardId: string;
    isDefault: boolean;
    entityIds: string[];
    instituteId: string;
    status: COMMAN_STATUS;
    selectionCount: number;
}
