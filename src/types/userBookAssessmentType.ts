import { Optional } from 'sequelize';
import { IUserBookAssessmentModelAttributes } from '../interfaces/userBookAssessmentInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TUserBookAssessmentModelCreationAttributes = Optional<IUserBookAssessmentModelAttributes, 'id'>;

export type TUserBookAssessmentAttributesWithAssociations = IUserBookAssessmentModelAttributes & {
    userBookAssessmentFileStorage?: IFileStorageAttributes;
};
