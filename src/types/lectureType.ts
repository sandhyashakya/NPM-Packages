import { ILectureModelAttributes } from '../interfaces/lectureInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TLectureModelCreationAttributes = Partial<ILectureModelAttributes>;

export type TLectureWithAssociation = ILectureModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
