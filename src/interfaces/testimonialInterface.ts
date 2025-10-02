import { COMMAN_STATUS, USER_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITestimonialModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    message: string;
    userId: string;
    status: COMMAN_STATUS;
    rating: number;
    userType: USER_TYPES;
    class?: string | null;
}
