import { Optional } from 'sequelize';
import { IAcademicCalendarModelAttributes } from '../interfaces/academicCalendarInterface';

export type TAcademicCalendarModelCreationAttributes = Optional<IAcademicCalendarModelAttributes, 'id'>;
export interface TUpdateAcademicCalenderStatusParams {
    instituteId?: string | null;
}
