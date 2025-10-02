import { Document } from 'mongoose';
import { USER_CHAPTER_INDEX_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IPlannerLectureContentAttributes {
    chapterIndexId: string;
    status?: USER_CHAPTER_INDEX_STATUS;
}
export interface IPlannerLectureAttributes {
    lectureId: string;
    teacherId?: string;
    lectureContent?: IPlannerLectureContentAttributes[];
    subjectIndexId?: string;
}

export interface IPlannerTimeSlotAttributes {
    id?: string;
    startTime: Date;
    endTime: Date;
}

export interface IPlannerModelAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId: string;
    workingDayId: string;
    date: Date;
    academicCalenderId: string;
    batchId: string;
    lectures: IPlannerLectureAttributes[];
    freeSlots: IPlannerTimeSlotAttributes[];
    events: IPlannerTimeSlotAttributes[];
    holidays: IPlannerTimeSlotAttributes[];
    exams: IPlannerTimeSlotAttributes[];
    lastSyncTime: Date;
}
