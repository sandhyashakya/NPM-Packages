import mongoose, { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { EXAM_GROUP_STANDARD_RESULT, EXAM_GROUP_STATUS } from '../constants/app';
import { IExamModelAttributes } from './examInterface';

export interface IExamGroupDaysAttributes {
    date: Date;
    note: string;
    subjectId: string;
    examId?: mongoose.Types.ObjectId;
    isHoliday: boolean;
    examDetails?: IExamModelAttributes;
}

export interface IExamGroupStandardByDaysAttributes {
    standardId: string;
    // batches?: string[];
    // subjects?: string[];
    days: IExamGroupDaysAttributes[];
    isMarksAdded?: boolean;
    result?: EXAM_GROUP_STANDARD_RESULT;
}

export interface IExamGroupModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title: string;
    subTitle: string;
    instituteId: string;
    startDate: Date;
    endDate: Date;
    standardByDays: IExamGroupStandardByDaysAttributes[];
    standards: string[];
    subjects?: string[];
    status: EXAM_GROUP_STATUS;
}
