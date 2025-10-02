import { IDefaultAttributes } from './commanInterface';
export interface ICountryAttributes extends IDefaultAttributes {
    id?: number;
    countryCode: string;
    name: string;
    phoneCode: number;
    currency: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
