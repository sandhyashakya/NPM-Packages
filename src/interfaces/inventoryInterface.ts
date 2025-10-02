import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS, INVENTORY_TYPE } from '../constants/app';

export interface IInventoryModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    status: COMMAN_STATUS;
    instituteId: string;
    lost: number;
    damage: number;
    totalQuantity: number;
    categoryId: string;
    remainingQuantity: number;
    inventoryType: INVENTORY_TYPE;
    note?: string;
}
