import { IDefaultAttributes } from './commanInterface';

export interface IBatchSubjectProjectAssessmentModelAttributes extends IDefaultAttributes {
    id: string;
    batchId: string;
    title: string;
    descriptions: string;
    subjectId: string;
    standardId: string;
    optionSelectionDueDate: Date;
    submissionDate: Date;
    instituteId?: string;
}
