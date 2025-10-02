import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { APPROVE_REQUEST_STATUS, APPROVE_REQUEST_TYPE } from '../constants/app';

export interface IApproveRequestModelAttributes extends IDefaultAttributes, Document {
    id: string;
    approveType: APPROVE_REQUEST_TYPE;
    data: object;
    status: APPROVE_REQUEST_STATUS;
    approveBy?: string;
    rejectBy?: string;
    reason?: string;
    rejectDate?: string;
    approveDate?: string;
}
