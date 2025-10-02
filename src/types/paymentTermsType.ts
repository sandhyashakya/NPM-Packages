import { Optional } from 'sequelize';
import { IPaymentTermsModelAttributes } from '../interfaces/paymentTermsInterface';

export type TPaymentTermsModelCreationAttributes = Optional<IPaymentTermsModelAttributes, 'id'>;

// export type TPaymentTermsAttributesWithAssociations = TPaymentTermsModelCreationAttributes & { feeHistoryFile?: IFileStorageAttributes };
