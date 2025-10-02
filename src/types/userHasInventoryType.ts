import { Optional } from 'sequelize';
import { IUserHasInventoryModelAttributes } from '../interfaces/userHasInventoryInterface';

export type TUserHasInventoryModelCreationAttributes = Optional<IUserHasInventoryModelAttributes, 'id'>;
