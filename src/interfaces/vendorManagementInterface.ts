import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IVendorModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    mobile1: string;
    mobile2: string;
    email: string;
    gstNo: string;
    address1: string;
    address2: string;
    pinCode: string;
    area: string;
    cityId: number;
    stateId: number;
    countryId: number;
    status: COMMAN_STATUS;
    instituteId: string;
}
