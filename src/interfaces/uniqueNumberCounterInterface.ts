import { Document } from 'mongoose';
import { TYPE_OF_USER, USER_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUniqueNumberCounterModelAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId: string;
    lastRollNumber: number;
    userType: USER_TYPES;
    type: TYPE_OF_USER;
    letterCode: string;
}
