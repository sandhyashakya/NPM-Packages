import { ACADEMIC_CALENDARS_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IAcademicCalendarModelAttributes extends IDefaultAttributes {
    id: string;
    startDate: Date;
    endDate: Date;
    instituteId: string;
    // batchId?: string;
    status: ACADEMIC_CALENDARS_STATUS;
}
