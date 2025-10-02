import { Document } from 'mongoose';
import { CHAPTER_INDEX_FILE_TYPE, CHAPTER_INDEX_TYPE, COMMAN_STATUS, SUBJECT_INDEX_TYPE, USER_CHAPTER_INDEX_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IChapterFileAttributes {
    id: string;
    type: CHAPTER_INDEX_FILE_TYPE;
    fileStorageId?: string;
    isDefault?: boolean;
    fileLink?: string;
    categoryId?: string; // type management id
    title?: string;
    descriptions?: string;
}

export interface IChapterIndexAttributes {
    id: string;
    index: number;
    title?: string;
    subTitle?: string;
    type: CHAPTER_INDEX_TYPE;
    parentId?: string;
    files?: IChapterFileAttributes[];
    teachingTime?: number;
    isDefault?: boolean;
}

export interface IAssignedUsersAttributes {
    userId: string;
    chapterIndexId: string;
    status?: USER_CHAPTER_INDEX_STATUS;
    statusUpdatedAt?: Date;
    teachingTime?: number;
    lectureId?: string;
    teachingAid?: string;
}
export interface ISubjectIndexModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title?: string;
    subject: string;
    batch?: string;
    type: SUBJECT_INDEX_TYPE;
    chapterIndex?: IChapterIndexAttributes[];
    status?: COMMAN_STATUS;
    instituteId?: string;
    sharedInstituteId?: string[];
    sharedUnverifiedInstituteId: string[];
    userId?: string;
    assignedUsers?: IAssignedUsersAttributes[];
    selectedCategoryIds?: string[];
}
