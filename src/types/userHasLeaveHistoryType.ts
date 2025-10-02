import { Optional } from 'sequelize';
import { IUserHasLeaveHistoryModelAttributes } from '../interfaces/userHasLeaveHistoryInterface';

export type TUserHasLeaveHistoryModelCreationAttributes = Optional<IUserHasLeaveHistoryModelAttributes, 'id'>;
