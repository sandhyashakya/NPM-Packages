import { IExamGroupModelAttributes } from '../interfaces/examGroupInterface';

export type TExamGroupCreationAttributes = Omit<IExamGroupModelAttributes, 'id'>;
export interface TUpdateExamGroupDataParams {
    academicCalenderId?: string | null;
    instituteId?: string | null;
}
