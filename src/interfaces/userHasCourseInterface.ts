import { COMMAN_STATUS, USER_COURSE_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasCourseModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    courseId: string;
    instituteId?: string;
    price: number;
    discount?: number;
    expiryDate: Date;
    status?: COMMAN_STATUS;
    courseStatus?: USER_COURSE_STATUS;
}
