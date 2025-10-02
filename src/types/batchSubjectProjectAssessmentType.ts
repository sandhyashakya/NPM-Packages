import { Optional } from 'sequelize';
import { IBatchSubjectProjectAssessmentModelAttributes } from '../interfaces/batchSubjectProjectAssessmentInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TBatchSubjectProjectAssessmentModelCreationAttributes = Optional<IBatchSubjectProjectAssessmentModelAttributes, 'id'>;

export type TBatchSubjectProjectAssessmentAttributesWithAssociations = IBatchSubjectProjectAssessmentModelAttributes & {
    batchSubjectProjectAssessmentFileStorage?: IFileStorageAttributes;
};
