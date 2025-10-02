import { LECTURE_SLOT_DURATION, LECTURE_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ILectureHistoryModelAttributes extends IDefaultAttributes {
    id: string;
    title?: string;
    type?: string;
    slotDuration: LECTURE_SLOT_DURATION;
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
    lectureId: string;
    weekNumber: number;
}
