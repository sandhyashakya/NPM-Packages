import { Document } from 'mongoose';
import { EXAM_ANSWER_SELECTION_TYPE, EXAM_VALID_ANSWER_TYPE, EXAM_MODE, EXAM_STATUS, PLANNER_SYNC_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
import mongoose from 'mongoose';

export interface IExamHasBatch {
    batchId: string;
    classroomId: string;
    startTime: Date;
    endTime: Date;
    isMarksAdded?: boolean;
}

export interface IExamModelAttributes extends IDefaultAttributes, Document {
    //comman fields for all exam modes
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    subject: string;
    fileId?: string;
    batches: IExamHasBatch[];
    mode: EXAM_MODE;
    type: string;
    scheduleDate: Date;
    maxMarks: number;
    passingMarks: number;
    status?: EXAM_STATUS;
    nagativeMarksPerQuestion: number;
    marksPerQuestion?: number;
    instituteId?: string;
    // fileUrl?: string;

    // fields for online exam mode
    totalQuestions?: number;
    mcqOptions?: string[];
    ansSelectionType?: EXAM_ANSWER_SELECTION_TYPE;
    validAnsType?: EXAM_VALID_ANSWER_TYPE;
    standard?: string;
    groupId?: mongoose.Types.ObjectId;
    isPublished: boolean;
    publishedDate?: Date;
    isMarksAdded?: boolean;
    plannerSyncStatus?: PLANNER_SYNC_STATUS;
}
