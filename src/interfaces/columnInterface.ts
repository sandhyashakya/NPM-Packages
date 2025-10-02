import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IRowSchema {
    id: string;
    title: string;
    column: string;
    default: boolean;
}

export interface IColumnModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title: string;
    columnList: IRowSchema[];
    status: COMMAN_STATUS;
}
