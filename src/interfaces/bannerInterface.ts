import { IDefaultAttributes } from './commanInterface';
import { BANNER_TYPE, APP_TYPE, COMMAN_STATUS, USER_TYPES } from '../constants/app';

export interface IBannerModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    type: APP_TYPE;
    bannerType: BANNER_TYPE;
    userType?: USER_TYPES;
    status: COMMAN_STATUS;
    fileStorageId: string;
    instituteId?: string;
    fileUrl?: string;
}
