import { Optional } from 'sequelize';
import { IUserHasDeviceModelAttributes } from '../interfaces/userHasDeviceInterface';

export type TUserHasDeviceModelCreationAttributes = Optional<IUserHasDeviceModelAttributes, 'id'>;
