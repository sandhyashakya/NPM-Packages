import { ANNOUCEMENT_STATUS, ANNOUCEMENT_SCHEDULE_TYPE, USER_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IAnnouncementModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    scheduleType: ANNOUCEMENT_SCHEDULE_TYPE;
    subjects?: string[];
    batches?: string[];
    userTypes?: USER_TYPES[];
    scheduleDate?: Date;
    instituteId?: string;
    userIds?: string[];
    status: ANNOUCEMENT_STATUS;
    fileStorageId?: string;
    link?: string;
    entityIds?: string[];
}
