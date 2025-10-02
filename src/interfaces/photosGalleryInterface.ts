import { COMMAN_STATUS, FILE_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
import { Document } from 'mongoose';

export interface IGalleryFile {
    fileType: FILE_TYPE;
    fileStorageId: string;
    fileStatus: COMMAN_STATUS;
}

export interface IGalleryAlbumAttributes extends IDefaultAttributes, Document {
    id: string;
    albumName: string;
    files: IGalleryFile[];
    status: COMMAN_STATUS;
    instituteId: string;
    date?: Date;
    academicCalendarId: string;
}
