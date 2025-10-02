import { Optional } from 'sequelize';
import { ICloudStorageModelAttributes } from '../interfaces/cloudStorageInterface';

export type TCloudStorageModelCreationAttributes = Optional<ICloudStorageModelAttributes, 'id'>;
