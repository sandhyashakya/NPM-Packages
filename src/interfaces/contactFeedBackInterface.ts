import { CONTACT_FEED_BACK_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
export interface IContactFeedBackAttributes extends IDefaultAttributes {
    id: number;
    subject: string;
    discraption: string;
    files?: string[];
    type: CONTACT_FEED_BACK_TYPE;
    instituteId?: string;
    academicCalendarId: string;
    userId?: string;
    givenInstitutedId?: string;
}
