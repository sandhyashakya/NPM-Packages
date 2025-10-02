import { Document } from 'mongoose';
import { IDefaultAttributes } from './commanInterface';
import {
    ADMISSION_TYPE,
    BOOLEAN_STATUS,
    COMMAN_STATUS,
    EMPLOYMENT_TYPE,
    IS_PRINCIPAL,
    USER_INSTITUTE_META_STATUS,
    USER_TYPES,
} from '../constants/app';

export interface IUserInstituteMetaSlots {
    slotId: string;
    isPrimary: boolean;
    presentStartTime: number;
    presentEndTime: number;
}
export interface IUserInstituteMetaAttributes extends IDefaultAttributes, Document {
    id: string;
    entities?: string[];
    // experienceEntities?: string[];
    userId: string;
    instituteId?: string;
    userType: USER_TYPES;
    status?: USER_INSTITUTE_META_STATUS;
    endTime?: Date;
    startTime?: Date;
    joiningDate?: Date;
    jobTitle?: string;
    subJobTitle?: string;
    jobDescription?: string;
    employmentType?: EMPLOYMENT_TYPE;
    isPrincipal?: IS_PRINCIPAL;
    rollNumber: string;
    details: BOOLEAN_STATUS;
    joinDate?: Date; // school in join Date when to connect in our school
    isNewAdmission: BOOLEAN_STATUS;
    grNumber: string;
    admissionType: ADMISSION_TYPE;
    isActive: COMMAN_STATUS;
    rejectedDate?: Date;
    slots?: IUserInstituteMetaSlots[];
    sidNo?: string;
    seatNo?: string;
    secondarySubject?: string[];
    lastGreetingDate?: Date;
    isSyncToSubscriptionPlan?: boolean;
}
