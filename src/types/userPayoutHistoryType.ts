import { Optional } from 'sequelize';
import { IUserPayoutHistoryModelAttributes } from '../interfaces/userPayoutHistoryInterface';

export type TUserPayoutHistoryModelCreationAttributes = Optional<IUserPayoutHistoryModelAttributes, 'id'>;
