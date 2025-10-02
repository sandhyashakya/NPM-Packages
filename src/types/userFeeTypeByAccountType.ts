import { Optional } from 'sequelize';
import { IUserFeeTypeByAccountModelAttributes } from '../interfaces/userFeeTypeByAccountInterface';

export type TUserFeeTypeByAccountModelCreationAttributes = Optional<IUserFeeTypeByAccountModelAttributes, 'id'>;
