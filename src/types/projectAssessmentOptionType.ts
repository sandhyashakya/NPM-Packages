import { Optional } from 'sequelize';
import { IProjectAssessmentOptionModelAttributes } from '../interfaces/projectAssessmentOptionInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TProjectAssessmentOptionModelCreationAttributes = Optional<IProjectAssessmentOptionModelAttributes, 'id'>;

export type TProjectAssessmentOptionAttributesWithAssociations = IProjectAssessmentOptionModelAttributes & {
    projectAssessmentOptionFileStorage?: IFileStorageAttributes;
};
