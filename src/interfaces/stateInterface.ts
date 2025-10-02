import { IDefaultAttributes } from './commanInterface';

export interface IStateAttributes extends IDefaultAttributes {
    id?: number;
    name: string;
    countryCode: string;
    stateCode: string;
    isActive?: boolean;
    countryId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
