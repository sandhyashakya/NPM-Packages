import { IExamModelAttributes } from '../interfaces/examInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TExamModelCreationAttributes = Omit<IExamModelAttributes, 'id'>;

export type TExamAttributesWithAssociations = IExamModelAttributes & { examFileStorage?: IFileStorageAttributes };
