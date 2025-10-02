import { Optional } from 'sequelize';
import { IWalletModelAttributes } from '../interfaces/walletInterface';

export type TWalletModelCreationAttributes = Optional<IWalletModelAttributes, 'id'>;
