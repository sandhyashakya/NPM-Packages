import { COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
import { Document } from 'mongoose';

export interface ICertificatesManagementAttributes extends IDefaultAttributes, Document {
    id: string;
    name: string;
    status: COMMAN_STATUS;
    instituteId?: string;
    additionalData: string[];
    isInstituteDefault?: boolean;
    // isDefault?: boolean;
}
