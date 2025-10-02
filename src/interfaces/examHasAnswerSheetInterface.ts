import mongoose, { Document } from 'mongoose';
import {
    EXAM_ANSWER_SHEET_QUESTION_RESULT,
    EXAM_ANSWER_SHEET_RESULT_STATUS,
    EXAM_ANSWER_SHEET_RESULT_TYPE,
    EXAM_ANSWER_SHEET_STATUS,
    USER_TYPES,
} from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IAnswerSheetQuestion {
    index: number;
    options?: string[];
    selectedOptions?: string[];
    validOptions?: string[];
    result?: EXAM_ANSWER_SHEET_QUESTION_RESULT;
}

export interface IExamHasAnswerSheetModelAttributes extends IDefaultAttributes, Document {
    id: string;
    examId: mongoose.Types.ObjectId;
    questions?: IAnswerSheetQuestion[];
    userId: string;
    userType?: USER_TYPES;
    status?: EXAM_ANSWER_SHEET_STATUS;
    obtainedMarks?: number;
    type?: EXAM_ANSWER_SHEET_RESULT_TYPE;
    resultStatus?: EXAM_ANSWER_SHEET_RESULT_STATUS;
    isInProgress?: boolean;
    studentExamIp?: string;
}
