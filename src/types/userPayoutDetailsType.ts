import { Optional } from 'sequelize';
import { IUserPayoutDetailsModelAttributes } from '../interfaces/userPayoutDetailsInterface';

export type TUserPayoutDetailsModelCreationAttributes = Optional<IUserPayoutDetailsModelAttributes, 'id'>;
