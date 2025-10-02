import { LEAVE, LEAVE_STATUS, LEAVE_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserLeaveRequestModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    leaveId: string;
    userHasLeaveId: string;
    leaveType: LEAVE_TYPE;
    leave: LEAVE;
    reason?: string;
    status: LEAVE_STATUS;
    startTime: Date;
    endTime: Date;
}
