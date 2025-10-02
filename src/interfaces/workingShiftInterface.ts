import { SCHOOL_SHIFT, WORKIN_DAY_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IWorkingShiftAttributes extends IDefaultAttributes {
    id: string;
    workingId: string;
    slotId: string;
    startTime: Date;
    endTime: Date;
    status?: WORKIN_DAY_STATUS;
    shiftType: SCHOOL_SHIFT;
    instituteId?: string;
}
