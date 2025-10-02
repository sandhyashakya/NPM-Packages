import { USER_BOOK_ASSESSMENT_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserBookAssessmentModelAttributes extends IDefaultAttributes {
    id: string;
    assessmentBookId: string;
    assessmentDateId: string;
    batchId: string;
    userId: string;
    status?: USER_BOOK_ASSESSMENT_STATUS;
}
