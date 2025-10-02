import { Optional } from 'sequelize';
import { IInventoryHistoryModelAttributes } from '../interfaces/inventoryHistoryInterface';

export type TInventoryHistoryModelCreationAttributes = Optional<IInventoryHistoryModelAttributes, 'id'>;
