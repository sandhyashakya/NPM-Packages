import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import {
    CATEGORY,
    COMMAN_STATUS,
    DISABILITY_TYPE,
    EMPLOYMENT_TYPE,
    FILE_TYPE,
    IS_PRINCIPAL,
    NATIONALITY,
    NO_TYPE,
    RELIGION_CASTE,
    USER_DETAILS,
    USER_TYPES,
    WORK_CATEGORY,
    WORK_TYPE,
} from '../constants/app';

export interface IUserHasFiles {
    fileType: FILE_TYPE;
    status?: COMMAN_STATUS;
    fileName: string;
    fileStorageId: string;
}

export interface IUserHasQualification {
    degree: string;
    schoolCollege: string | null;
    boardUniversity: string | null;
    passingYear: Date | null;
}
export interface IUserSchoolInfo {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    dob: string;
    birthPlace?: string;
    gender?: string;
    fatherName?: string;
    motherName?: string;
    aadharCard?: string;
    bloodGroup?: string;
    panCard?: string;
    category?: CATEGORY;
    nationality?: NATIONALITY;
    religionCaste?: RELIGION_CASTE;
    caste?: string;
}
export interface IExperienceSchema {
    jobTitle: string;
    subJobTitle: string;
    jobDescription: string;
    employmentType: EMPLOYMENT_TYPE;
    startTime: Date;
    endTime: Date;
    status: string;
    entities: string[];
    isPrincipal: IS_PRINCIPAL;
    instituteId: string;
    institutedName: string;
    userType: USER_TYPES;
    isSchool?: boolean; // last is school or institute for that
}
export interface ILastSchoolSchema {
    startTime: Date;
    endTime: Date;
    name: string;
    address1: string;
    address2: string;
    area: string;
    city: number;
    district: string;
    state: number;
    country: number;
    pinCode: string;
    reason: string;
    instituteId: string;
    result?: number;
    haveLeavingCertificate?: boolean;
    entities: string[];
    isSchool?: boolean; // last is school or institute for that
}
export interface IAddressSchema {
    address1: string;
    address2: string;
    area?: string;
    city: number;
    district: string;
    state: number;
    country: number;
    pinCode: string;
}
export interface IEmergencyContactSchema {
    name: string;
    relation: string;
    mobile: string;
}
export interface IWorkingDetailsSchema {
    workType: WORK_TYPE | null;
    workCategory: WORK_CATEGORY | null;
    occupation: string;
    organizationAddress: string | null;
    organizationName: string;
}
export interface IUserDetailsAttributes extends IDefaultAttributes, Document {
    id: string;
    intersetedEntities?: string[];
    experiences?: IExperienceSchema[];
    lastSchool?: ILastSchoolSchema[];
    userId: string;
    files?: IUserHasFiles[];
    qualifications?: IUserHasQualification[];
    bio?: string;
    birthPlace: string;
    fatherName: string;
    motherName: string;
    aadharCard: string;
    driverlicense: string;
    panCard?: string;
    category: CATEGORY;
    nationality: NATIONALITY;
    religionCaste: RELIGION_CASTE;
    caste: string;
    currentAddress: IAddressSchema;
    uidNo: string;
    teacherUidNo: string;
    uniqueNumber: string;
    numberType: NO_TYPE;
    gpfNo: string;
    epfNo: string;
    userDetailsType: USER_DETAILS;
    userDetails: DISABILITY_TYPE;
    emergencyContact: IEmergencyContactSchema;
    workingDetails: IWorkingDetailsSchema;
    userSchoolInfo: IUserSchoolInfo;
    domicileState?: string;
}
