import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface ICareerModelAttributes extends IDefaultAttributes, Document {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    technology: string[];
    resumeFileStorageId: string;
    status: COMMAN_STATUS;
}
