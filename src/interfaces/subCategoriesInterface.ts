import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface ISubCategoriesModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    categoryId: string;
    instituteId?: string;
    status: COMMAN_STATUS;
}
