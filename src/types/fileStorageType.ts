import { Optional } from 'sequelize';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TFileStorageModelCreationAttributes = Optional<IFileStorageAttributes, 'id'>;
