import { FACILITY_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFacilityAttributes extends IDefaultAttributes {
    id: string;
    typeManagementId: string;
    type: FACILITY_TYPE;
    quantity: number;
    instituteId: string;
}
