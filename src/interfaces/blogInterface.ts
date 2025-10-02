import { BLOG_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
import { Document } from 'mongoose';

export interface ICommentSchema {
    id: string;
    userId: string;
    text: string;
    parentCommentId?: string;
    createdAt: Date;
    updateAt: Date;
    isHide: boolean;
}
export interface ILikeSchema {
    likeId: string;
    userId: string;
    createdAt: Date;
}
export interface IShareListSchema {
    userId: string;
    createdAt: Date;
    createdBy: string;
}
export interface ISubTopicSchema {
    title: string;
    description: string;
    files: string[];
    srNo: number;
}

export interface IBlogModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title: string;
    description: string;
    blogStatus: BLOG_STATUS;
    instituteId: string;
    feedBackId?: string;
    files: string[];
    academicCalendarId: string;
    comment: ICommentSchema[];
    like: ILikeSchema[];
    approveBy?: string;
    rejectBy?: string;
    rejectNote?: string;
    subTopic?: ISubTopicSchema[];
    slug: string;
    shareList: IShareListSchema[];
}
