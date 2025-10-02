import { IDefaultAttributes } from './commanInterface';
import { ASSIGN_TYPE, RETURN_STATUS, USER_TYPES } from '../constants/app';

export interface IUserHasInventoryModelAttributes extends IDefaultAttributes {
    id: string;
    userType: USER_TYPES;
    userId: string;
    quantity: number;
    totalReturnQuantity: number;
    assignType: ASSIGN_TYPE;
    expectedReturnDate?: Date;
    inventoryId: string;
    subjectId?: string;
    returnStatus: RETURN_STATUS;
    returnQuantity?: number;
    returnDate?: Date;
    returnDamageQuantity?: number;
    returnLostQuantity?: number;
    penalty?: number;
    returnNote?: string;
    instituteId: string;
}
