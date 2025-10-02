import { Optional } from 'sequelize';
import { IUserProjectAssessmentOptionModelAttributes } from '../interfaces/userProjectAssessmentOptionInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TUserProjectAssessmentOptionModelCreationAttributes = Optional<IUserProjectAssessmentOptionModelAttributes, 'id'>;

export type TUserProjectAssessmentOptionAttributesWithAssociations = IUserProjectAssessmentOptionModelAttributes & {
    userProjectAssessmentOptionFileStorage?: IFileStorageAttributes;
};
