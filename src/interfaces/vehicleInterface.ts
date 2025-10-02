import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IVehicleModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    status: COMMAN_STATUS;
    number: string;
    capacity: number;
    rcBookFileId: string;
    instituteId: string;
}
