import { COMMAN_STATUS, LEAVE, TERM_DURATION } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IMasterLeaveModelAttributes extends IDefaultAttributes {
    id: string;
    totalLeave: number;
    instituteId: string;
    typeManagementId: string;
    termDuration: TERM_DURATION;
    startTermDuration: Date;
    endTermDuration: Date;
    leave: LEAVE;
    status: COMMAN_STATUS;
}
