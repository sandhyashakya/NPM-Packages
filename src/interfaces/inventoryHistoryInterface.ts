import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS, INVENTORY_TYPE, USER_INVENTORY_ACTION } from '../constants/app';

export interface IInventoryHistoryModelAttributes extends IDefaultAttributes {
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
    inventoryId: string;
    action: USER_INVENTORY_ACTION;
}
