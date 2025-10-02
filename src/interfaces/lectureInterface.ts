import { LECTURE_STATUS, LECTURE_TITLE, PLANNER_SYNC_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ILectureModelAttributes extends IDefaultAttributes {
    id: string;
    title?: LECTURE_TITLE;
    descriptions?: string;
    type?: string;
    slotDuration: number;
    subject?: string;
    startTime: Date;
    endTime: Date;
    instituteId?: string;
    classRoomId?: string;
    primaryUserId?: string;
    secondaryUserId?: string;
    workingDayId: string;
    batchId?: string;
    status?: LECTURE_STATUS;
    checkedInAt?: Date;
    checkedOutAt?: Date;
    groupId: string;
    color?: string;
    plannerSyncStatus?: PLANNER_SYNC_STATUS;
    shiftId?: string;
    slotId?: string;
}
