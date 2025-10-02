import { Optional } from 'sequelize';
import { IUserFeeTypeModelAttributes } from '../interfaces/userFeeTypeInterface';

export type TUserFeeTypeModelCreationAttributes = Optional<IUserFeeTypeModelAttributes, 'id'>;

export type TUserFeeTypeModelCreationWithBankIdAttributes = Optional<IUserFeeTypeModelAttributes, 'id'> & { bankAccountId?: string };
