import { IDefaultAttributes } from './commanInterface';
import { NOTIFICATION_MODULE_TYPE, NOTIFICATION_STATUS } from '../constants/app';

export interface INotificationModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    message: string;
    // type: NOTIFICATION_TYPE;
    senderId: string;
    receiverId: string;
    // deviceToken: string;
    viewDate?: Date;
    status: NOTIFICATION_STATUS;
    instituteId?: string;
    moduleType: NOTIFICATION_MODULE_TYPE;
}

export interface INotification {
    title: string;
    message: string;
    senderId: string;
    deviceToken: string;
    instituteId?: string;
}
