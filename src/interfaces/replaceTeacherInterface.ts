import { Document } from 'mongoose';

import { COMMAN_STATUS, REPLACE_TEACHER_STATUS, TEACHER_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IReplaceTeacherBatchesSchema {
    subjectId: string;
    lectureId: string;
    userBatchId: string;
    replaceTeacherBatchId: string;
}

export interface IReplaceTeacherModelAttributes extends IDefaultAttributes, Document {
    id: string;
    endDate: Date;
    userId: string;
    startDate: Date;
    standardId: string;
    instituteId: string;
    status: COMMAN_STATUS;
    replaceTeacherId: string;
    teacherType: TEACHER_TYPE;
    batches: IReplaceTeacherBatchesSchema[];
    replaceTeacherStatus: REPLACE_TEACHER_STATUS;
}
