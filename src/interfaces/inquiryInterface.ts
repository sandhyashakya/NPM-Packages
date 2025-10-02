import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import { ADMISSION_TYPE, INQUIRY_REFERRED_BY, INQUIRY_STATUS, USER_TYPES } from '../constants/app';
import { IAddressSchema } from './userDetailsInterface';

export interface IBasicInformation {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    mobile: string;
    gender: string;
    dob: Date;
    birthPlace?: string;
    address1: string;
}
export interface IAcademicInformation {
    entities: string[];
    admissionType?: ADMISSION_TYPE;
    batchType: string;
}
export interface ILastSchool {
    name: string;
    address1: string;
    result?: number;
    uidNo?: string;
    reason?: string;
    haveLeavingCertificate?: boolean;
}
export interface IGuardianInformation {
    firstName: string;
    lastName: string;
    middleName: string;
    relation: string;
    mobile: string;
    email: string;
    guardianQualification: string;
    guardianOccupation: string;
    guardianOccupationDetails: string;
    motherName?: string;
}

export interface IInquiryModelAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId: string;
    basicInformation: IBasicInformation;
    academicInformation: IAcademicInformation;
    guardianInformation: IGuardianInformation;
    address?: IAddressSchema;
    referredBy: INQUIRY_REFERRED_BY;
    others: string;
    inquiryStatus: INQUIRY_STATUS;
    lastSchoolInformation: ILastSchool;
    appType: string;
    userType: USER_TYPES;
}
