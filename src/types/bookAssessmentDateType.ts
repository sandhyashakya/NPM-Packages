import { Optional } from 'sequelize';
import { IBookAssessmentDateModelAttributes } from '../interfaces/bookAssessmentDateInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TBookAssessmentDateModelCreationAttributes = Optional<IBookAssessmentDateModelAttributes, 'id'>;

export type TBookAssessmentDateAttributesWithAssociations = IBookAssessmentDateModelAttributes & {
    bookAssessmentDateFileStorage?: IFileStorageAttributes;
};
