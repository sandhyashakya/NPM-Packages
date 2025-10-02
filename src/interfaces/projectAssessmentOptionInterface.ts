import { IDefaultAttributes } from './commanInterface';

export interface IProjectAssessmentOptionModelAttributes extends IDefaultAttributes {
    id: string;
    assessmentProjectId: string;
    title: string;
    subTitle: string;
    descriptions: string;
}
