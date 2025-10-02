import { Optional } from 'sequelize';
import { IFeeTypeModelAttributes } from '../interfaces/feeTypeInterface';

export type TFeeTypeModelCreationAttributes = Optional<IFeeTypeModelAttributes, 'id'>;
