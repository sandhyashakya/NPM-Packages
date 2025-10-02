import { IDefaultAttributes } from './commanInterface';

export interface IAccountHasReceiptDetailsInterfaceModelAttributes extends IDefaultAttributes {
    id: string;
    bankId: string;
    addressLine1: string;
    addressLine2: string;
    pinCode: string;
    city: number;
    state: number;
    country: number;
    mobile: string[];
    area: string;
    profileImage: string;
    name: string;
    landline: string;
    instituteId: string;
}
