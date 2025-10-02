import { BOOK_ASSESSMENT_DATE_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IBookAssessmentDateModelAttributes extends IDefaultAttributes {
    id: string;
    assessmentBookId: string;
    status: BOOK_ASSESSMENT_DATE_STATUS;
    date: Date;
}
