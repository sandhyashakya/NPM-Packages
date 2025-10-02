import { PROJECT_ASSESSMENT_OPTION_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserProjectAssessmentOptionModelAttributes extends IDefaultAttributes {
    id: string;
    assessmentProjectId: string;
    projectOptionId?: string;
    userId: string;
    status?: PROJECT_ASSESSMENT_OPTION_STATUS;
    note?: string;
}
