import { Optional } from 'sequelize';

import { ISyllabusModelAttributes } from '../interfaces/syllabusInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TSyllabusCreationAttributes = Optional<ISyllabusModelAttributes, 'id'>;

export type TSyllabusAttributesWithAssociations = ISyllabusModelAttributes & { fileStorageDetails?: IFileStorageAttributes } & {};
