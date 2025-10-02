import { Optional } from 'sequelize';
import { IBankAccountDetailsInterfaceModelAttributes } from '../interfaces/bankAccountDetailsInterface';

export type TBankAccountDetailsModelCreationAttributes = Optional<IBankAccountDetailsInterfaceModelAttributes, 'id'>;
