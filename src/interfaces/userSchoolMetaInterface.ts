import { Document } from 'mongoose';
import { BOOLEAN_STATUS, DESIGNATION_OF_PERSON, PROPERTY_STATUS, TRUST_REGISTERED_UNDER, TRUST_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITrustInformation {
    // id: string;
    registrationDate: Date;
    trustRegistrationNo: string;
    trustType: TRUST_TYPE;
    trustRegisteredUnder: TRUST_REGISTERED_UNDER;
    trustName: string;
    address1: string;
    area: string;
    address2: string;
    pinCode: string;
    country: number;
    state: number;
    city: number;
    landline: string;
    mobile: string[];
    email: string;
}
export interface ICorrespondentInformation {
    // correspondentId: string;
    authorizedPerson: string;
    designationOfPerson: DESIGNATION_OF_PERSON;
    address1: string;
    trustType: TRUST_TYPE;
    address2: string;
    area: string;
    pinCode: string;
    country: number;
    state: number;
    city: number;
    landline: string;
    mobile: string[];
    email: string;
    aadharCardNumber: string;
    panCardNumber: string;
    profileImage: string;
}
export interface ITrustiesInformation {
    // correspondentId: string;
    authorizedPerson: string;
    isCorrespondent: BOOLEAN_STATUS;
    designationOfPerson: DESIGNATION_OF_PERSON;
    address1: string;
    address2: string;
    area: string;
    pinCode: string;
    country: number;
    state: number;
    city: number;
    landline: string;
    mobile: string[];
    email: string;
    aadharCardNumber: string;
    panCardNumber: string;
    profileImage: string;
}
export interface IBuildingInformation {
    // id: string;
    buildingStatus: PROPERTY_STATUS;
    buildingOwnerName: string;
    compoundedWall: BOOLEAN_STATUS;
    playGroundStatus: PROPERTY_STATUS;
    playGroundOwnerName: string;
    playGroundArea: string;
    buildingPlanOfSchoolSanctioned: BOOLEAN_STATUS;
    permissionTaken: BOOLEAN_STATUS;
    tpNumber: string;
    finalPlotNumber: string;
    surveyNumber: string;
    finalPlotSize: string;
}
export interface IHscSscSchema {
    centerCode: string;
    centerName: string;
    zoneCode: string;
    zoneName: string;
}
export interface ICoInfrastructureSchema {
    id: string;
    transport: BOOLEAN_STATUS;
    canteen: BOOLEAN_STATUS;
    hostel: BOOLEAN_STATUS;
}
export interface ISchoolInformation {
    description?: string;
    landline: string;
    mobile: string[];
    fax: string;
    country: number;
    // svsName: SVA_NAME;
    svsName: string;
    // qdcName: QDC_NAME;
    qdcName: string;
    schoolStartYear: Date;
    schoolRegistrationDate: Date;
    schoolRegistrationNumber: string;
    semiCode: string;
    udiseCode: string;
    brochure: string;
    certificate: string;
    sscIndexNo: string;
    hscIndexNo: string;
    sscData?: IHscSscSchema;
    hscData?: IHscSscSchema;
    location?: string;
}

export interface IUserSchoolMetaModelAttributes extends IDefaultAttributes, Document {
    id: string;
    instituteId: string;
    isSubmitted: BOOLEAN_STATUS;
    completedPercentage: number;
    coInfrastructure: ICoInfrastructureSchema;
    schoolInformation?: ISchoolInformation[];
    trustInformation?: ITrustInformation[];
    correspondentInformation?: ICorrespondentInformation[];
    trustiesInformationSchema?: ITrustiesInformation[];
    buildingInformation?: IBuildingInformation[];
}
