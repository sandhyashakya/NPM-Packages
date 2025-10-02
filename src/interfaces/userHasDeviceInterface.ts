import { NOTIFICATION_ACTION } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasDeviceModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    deviceId: string;
    deviceToken?: string;
    type: NOTIFICATION_ACTION;
    socketId?: string;
}
