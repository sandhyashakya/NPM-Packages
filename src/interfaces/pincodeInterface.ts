import { IDefaultAttributes } from './commanInterface';

export interface IPincodeAttributes extends IDefaultAttributes {
    id?: number;
    pincode: string;
    district: string;
    state: string;
    countryCode: string;
    cityName: string;
    latitude?: string | null;
    longitude?: string | null;
    countryId?: number | null;
    stateId?: number | null;
    cityId?: number | null;
    isActive?: boolean;
}
