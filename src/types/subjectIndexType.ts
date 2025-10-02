import { Optional } from 'sequelize';
import { ISubjectIndexModelAttributes } from '../interfaces/subjectIndexInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TSubjectIndexModelCreationAttributes = Optional<ISubjectIndexModelAttributes, 'id'>;

export type TSubjectIndexAttributesWithAssociations = ISubjectIndexModelAttributes & { subjectIndexFileStorage?: IFileStorageAttributes };
