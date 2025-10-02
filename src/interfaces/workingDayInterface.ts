import { WORKIN_DAY_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IWorkingDayAttributes extends IDefaultAttributes {
    id: string;
    dayName: string;
    startTime: Date;
    endTime: Date;
    status?: WORKIN_DAY_STATUS;
    instituteId?: string;
    dayOfWeek: number;
}
