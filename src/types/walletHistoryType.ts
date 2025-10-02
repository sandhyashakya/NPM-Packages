import { Optional } from 'sequelize';
import { IWalletHistoryModelAttributes } from '../interfaces/walletHistoryInterface';

export type TWalletHistoryModelCreationAttributes = Optional<IWalletHistoryModelAttributes, 'id' | 'status'>;
