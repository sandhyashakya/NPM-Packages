import { Optional } from 'sequelize';
import { IUserHasFeeTermsModelAttributes } from '../interfaces/userHasFeeTermsInterface';

export type TUserHasFeeTermsModelCreationAttributes = Optional<IUserHasFeeTermsModelAttributes, 'id'>;
