import { Document } from 'mongoose';
import { ATTENDANCE_STATUS, ATTENDANCE_TYPE, USER_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IAttendanceUser {
    userId: string;
    status: ATTENDANCE_STATUS;
    description: string;
    checkedInTime: Date;
    checkedOutTime: Date;
}

export interface IAttendanceModelAttributes extends IDefaultAttributes, Document {
    id: string;
    date: Date;
    type: ATTENDANCE_TYPE;
    userType: USER_TYPES;
    instituteId?: string;
    users: IAttendanceUser[];
    batchId?: string;
    lectureId?: string;
    slotId?: string;
}
