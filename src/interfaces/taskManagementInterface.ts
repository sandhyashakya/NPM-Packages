import mongoose, { Document } from 'mongoose';
import { TASK_MANAGEMENT_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITaskConversationsAttributes {
    messageId?: string;
    userId: string;
    message: string;
    parentId?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ITaskManagementModelAttributes extends IDefaultAttributes, Document {
    id: mongoose.Types.ObjectId;
    title: string;
    subTitle: string;
    description: string;
    assignedUsers: string[];
    collaboratorUsers: string[];
    conversations: ITaskConversationsAttributes[];
    status: TASK_MANAGEMENT_STATUS;
    instituteId: string;
    startDate?: Date;
    endDate?: Date;
}
