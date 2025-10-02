import { IDefaultAttributes } from './commanInterface';

export interface ICityAttributes extends IDefaultAttributes {
    id?: number;
    name: string;
    countryCode: string;
    stateCode: string;
    isActive?: boolean;
    countryId?: number;
    stateId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
