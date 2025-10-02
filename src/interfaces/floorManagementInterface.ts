import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IFloorManagementModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    floorNumber: number;
    status: COMMAN_STATUS;
    instituteId: string;
}
