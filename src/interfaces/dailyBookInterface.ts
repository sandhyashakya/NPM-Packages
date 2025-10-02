import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';

export interface IDailyBookModelAttributes extends IDefaultAttributes, Document {
    id: string;
    userId: string;
    date: Date;
    instituteId: string;
    batchId: string;
    subjectId: string;
    lectureId: string;
    subjectIndexId: string;
    chapterIndexId: string[];
    teachingAid: string;
}
