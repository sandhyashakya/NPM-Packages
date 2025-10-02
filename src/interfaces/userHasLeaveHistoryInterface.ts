import { LEAVE, LEAVE_STATUS, LEAVE_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasLeaveHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    userLeaveRequestId: string;
    userHasLeaveId: string;
    usedLeave: number;
    leaveType: LEAVE_TYPE;
    leave: LEAVE;
    reason?: string;
    status: LEAVE_STATUS;
    startTime: Date;
    endTime: Date;
}
