import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IProductModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    categoryId: string;
    instituteId?: string;
    subCategoryId: string;
    status: COMMAN_STATUS;
}
