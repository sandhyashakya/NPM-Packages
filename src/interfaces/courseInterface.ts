import { APP_TYPE, COMMAN_STATUS, COURSE_STATUS, USER_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ICourseModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId?: string;
    price: number;
    title: string;
    subTitle: string;
    materialType: string;
    userType: USER_TYPES;
    appType: APP_TYPE;
    courseStatus: COURSE_STATUS;
    entities: string[];
    subjectId: string;
    status: COMMAN_STATUS;
    instructor: string;
    expiryTime: number;
}
