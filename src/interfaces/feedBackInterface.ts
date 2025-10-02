import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { FEED_BACK_STATUS, FEED_BACK_TYPE } from '../constants/app';

export interface IConversation extends IDefaultAttributes {
    userId: string;
    comment: string;
    parentCommentId: string;
}

export interface IFeedBackModelAttributes extends IDefaultAttributes, Document {
    id: string;
    type: FEED_BACK_TYPE;
    serialNo: string;
    publicToAll?: boolean;
    rating?: number;
    status: FEED_BACK_STATUS;
    subject: string;
    description: string;
    instituteId: string;
    conversation: IConversation[];
}
