import { IDefaultAttributes } from './commanInterface';

export interface IBatchSubjectBookAssessmentModelAttributes extends IDefaultAttributes {
    id: string;
    batchId: string;
    subjectId: string;
    standardId: string;
    assessmentType: string;
    instituteId?: string;
}
