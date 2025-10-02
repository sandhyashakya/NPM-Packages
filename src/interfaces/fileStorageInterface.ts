import { APP_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFileStorageAttributes extends IDefaultAttributes {
    id: string;
    originalFileName: string;
    storageFileName: string;
    storagePath?: string;
    localPath?: string;
    uploadedFrom: APP_TYPE;
    filePath?: string;
    instituteId?: string;
    fileSize?: number;
    storageUserId?: string;
}
