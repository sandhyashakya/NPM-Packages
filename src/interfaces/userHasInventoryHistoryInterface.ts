import { USER_INVENTORY_ACTION } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasInventoryHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    totalReturnQuantity: number;
    inventoryId: string;
    returnQuantity?: number;
    returnDate?: Date | null;
    returnDamageQuantity?: number;
    assignQuantity?: number;
    returnLostQuantity?: number;
    penalty?: number;
    returnNote?: string;
    instituteId: string;
    parentId: string;
    action: USER_INVENTORY_ACTION;
    remainingQuantity: number;
    totalQuantity: number;
}
