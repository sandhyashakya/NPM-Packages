import { HOME_WORK_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasHomeWorkModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    homeWorkId: string;
    note?: string;
    studentStatus?: HOME_WORK_STATUS;
    instituteStatus?: HOME_WORK_STATUS;
}
