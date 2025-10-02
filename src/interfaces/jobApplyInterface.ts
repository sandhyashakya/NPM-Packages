import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS, EMPLOYMENT_TYPE, FILE_TYPE, IMAGE__NAME, JOB_ACTION } from '../constants/app';
import { Document } from 'mongoose';

export interface IQualifications {
    degree: string;
    schoolCollege: string;
    passingYear: Date;
}

export interface IExperience {
    instituteName: string;
    jobTitle: string;
    subJobTitle: string;
    employmentType: EMPLOYMENT_TYPE;
    startTime: Date;
    endTime: Date;
}

export interface IDocuments {
    fileName: IMAGE__NAME;
    fileStorageId: string;
    fileType: FILE_TYPE;
    status: COMMAN_STATUS;
}

export interface IJobApplyAttributes extends IDefaultAttributes, Document {
    userId: string;
    instituteId: string;
    entities: string[];
    qualifications: IQualifications[];
    experience: IExperience[];
    documents: IDocuments[];
    jobId: string;
    coverLetter?: string;
    action: JOB_ACTION;
    mobile: string[];
    email: string;
}
