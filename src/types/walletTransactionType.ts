import { Optional } from 'sequelize';
import { IWalletTransactionModelAttributes } from '../interfaces/walletTransactionInterface';

export type TWalletTransactionModelCreationAttributes = Optional<IWalletTransactionModelAttributes, 'id'>;
