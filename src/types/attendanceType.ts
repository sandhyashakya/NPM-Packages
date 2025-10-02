import { IAttendanceModelAttributes } from '../interfaces/attendanceInterface';

export type TAttendanceCreationAttributes = Omit<IAttendanceModelAttributes, 'id'>;
