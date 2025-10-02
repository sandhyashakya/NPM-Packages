import { Optional } from 'sequelize';
import { IUserHasLeaveModelAttributes } from '../interfaces/userHasLeaveInterface';

export type TUserHasLeaveModelCreationAttributes = Optional<IUserHasLeaveModelAttributes, 'id'>;
