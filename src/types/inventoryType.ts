import { Optional } from 'sequelize';
import { IInventoryModelAttributes } from '../interfaces/inventoryInterface';

export type TInventoryModelCreationAttributes = Optional<IInventoryModelAttributes, 'id'>;
