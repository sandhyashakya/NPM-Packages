import { LEAVE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasLeaveModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    totalLeave: number;
    usedLeave: number;
    leaveId: string;
    userHasLeaveId?: string;
    leave: LEAVE;
}
