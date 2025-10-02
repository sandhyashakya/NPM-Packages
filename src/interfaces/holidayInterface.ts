import { Document } from 'mongoose';
import { ACADEMIC_CALENDARS_TYPE, COMMAN_STATUS, PLANNER_SYNC_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IHolidayHasBatch {
    batchId: string;
    subjectId?: string;
    lectureId?: string;
}

export interface IHolidayModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    // subject?: string;
    batches?: IHolidayHasBatch[];
    type: ACADEMIC_CALENDARS_TYPE;
    status?: COMMAN_STATUS;
    instituteId?: string;
    startTime: Date;
    endTime: Date;
    typeManagementId: string;
    plannerSyncStatus?: PLANNER_SYNC_STATUS;
}
