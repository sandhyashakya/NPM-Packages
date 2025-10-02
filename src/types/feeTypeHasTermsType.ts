import { Optional } from 'sequelize';
import { IFeeTypeHasTermsModelAttributes } from '../interfaces/feeTypeHasTermsInterface';

export type TFeeTypeHasTermsModelCreationAttributes = Optional<IFeeTypeHasTermsModelAttributes, 'id'>;
