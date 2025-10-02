import { IDefaultAttributes } from './commanInterface';

export interface ISchoolFeesCollectionModelAttributes extends IDefaultAttributes {
    id: string;
    date?: Date;
    totalFeeAmount: number;
    userId: string;
    instituteId: string;
    discount: number;
    paidFee: number;
    dueDate?: Date;
    academicCalendarId: string;
    perviousFeeCollectionId: string | null;
}
