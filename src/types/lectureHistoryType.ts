import { ILectureHistoryModelAttributes } from '../interfaces/lectureHistoryInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TLectureHistoryModelCreationAttributes = Partial<ILectureHistoryModelAttributes>;

export type TLectureHistoryWithAssociation = ILectureHistoryModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
