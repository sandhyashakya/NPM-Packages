import { IDefaultAttributes } from './commanInterface';
import { Document } from 'mongoose';

export interface ICertificatesHistoryAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId?: string;
    userInstituteMetaId: string[];
    certificatesManagementId: string;
    additionalData: object;
}
