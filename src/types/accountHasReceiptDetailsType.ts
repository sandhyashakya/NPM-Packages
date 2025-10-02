import { Optional } from 'sequelize';
import { IAccountHasReceiptDetailsInterfaceModelAttributes } from '../interfaces/accountHasReceiptDetailsInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TAccountHasReceiptDetailsModelCreationAttributes = Optional<IAccountHasReceiptDetailsInterfaceModelAttributes, 'id'>;

export type TAccountHasReceiptDetailAttributesWithAssociations = IAccountHasReceiptDetailsInterfaceModelAttributes & {
    accountHasReceiptDetailsProfileImage?: IFileStorageAttributes;
};
