import { COMMAN_STATUS, PLANNER_SYNC_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IBatchModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    type: string;
    subjects: string[];
    startTime: Date;
    endTime: Date;
    capacity: number;
    instituteId: string;
    shiftId: string | null;
    slotId?: string;
    teacherId?: string;
    status: COMMAN_STATUS;
    plannerSyncStatus?: PLANNER_SYNC_STATUS;
    academicCalendarId?: string;
}
