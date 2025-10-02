import { USER_HAS_ANNOUCEMENT_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasAnnouncementModelAttributes extends IDefaultAttributes {
    id: string;
    userId?: string;
    announcementId: string;
    instituteId?: string;
    status?: USER_HAS_ANNOUCEMENT_STATUS;
}
