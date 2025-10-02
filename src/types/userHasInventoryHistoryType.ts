import { Optional } from 'sequelize';
import { IUserHasInventoryHistoryModelAttributes } from '../interfaces/userHasInventoryHistoryInterface';

export type TUserHasInventoryHistoryModelCreationAttributes = Optional<IUserHasInventoryHistoryModelAttributes, 'id'>;
