import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface ICategoriesModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    status: COMMAN_STATUS;
    instituteId?: string;
}
