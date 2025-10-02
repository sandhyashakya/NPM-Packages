import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';

export interface IGenarateIdCardModelAttributes extends IDefaultAttributes, Document {
    id: string;
    templateName: string;
    content?: string;
    instituteId: string;
}
