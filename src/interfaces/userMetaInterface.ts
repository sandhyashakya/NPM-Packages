import { Document } from 'mongoose';
import { TParentsUserMetaModelAttributes, TGuardiansUserMetaModelAttributes } from '../types/userMetaType';
import { IDefaultAttributes } from './commanInterface';

export interface IUserMetaAttributes extends IDefaultAttributes, Document {
    parents: TParentsUserMetaModelAttributes[];
    guardians: TGuardiansUserMetaModelAttributes[];
    primaryParent: string;
    userId: string;
    createdBy: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
