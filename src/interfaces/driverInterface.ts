import { APP_TYPE, COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IDriverModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    pinCode: string;
    city: number;
    state: number;
    country: number;
    area: string;
    aadharCardNumber: string;
    aadharCard: string;
    drivingLicenseNumber: string;
    drivingLicense: string;
    appType?: APP_TYPE;
    status: COMMAN_STATUS;
}
