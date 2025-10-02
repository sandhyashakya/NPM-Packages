import { Optional } from 'sequelize';
import { IUserPayoutModelAttributes } from '../interfaces/userPayoutInterface';
import { TUserPayoutDetailsModelCreationAttributes } from './userPayoutDetailsType';

export type TUserPayoutModelCreationAttributes = Optional<IUserPayoutModelAttributes, 'id'>;

export type TUserPayoutWithDetails = IUserPayoutModelAttributes & {
    userPayoutDetailsList: TUserPayoutDetailsModelCreationAttributes[];
};
