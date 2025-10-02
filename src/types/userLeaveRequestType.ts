import { Optional } from 'sequelize';
import { IUserLeaveRequestModelAttributes } from '../interfaces/userLeaveRequestInterface';

export type TUserLeaveRequestModelCreationAttributes = Optional<IUserLeaveRequestModelAttributes, 'id'>;
