import { Optional } from 'sequelize';
import { IBatchSubjectBookAssessmentModelAttributes } from '../interfaces/batchSubjectBookAssessmentInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TBatchSubjectBookAssessmentModelCreationAttributes = Optional<IBatchSubjectBookAssessmentModelAttributes, 'id'>;

export type TBatchSubjectBookAssessmentAttributesWithAssociations = IBatchSubjectBookAssessmentModelAttributes & {
    batchSubjectBookAssessmentFileStorage?: IFileStorageAttributes;
};
