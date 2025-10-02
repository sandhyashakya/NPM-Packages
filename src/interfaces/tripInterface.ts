import { TRIP_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITripModelAttributes extends IDefaultAttributes {
    id: string;
    tripType: TRIP_TYPE;
    vehicleId: string;
    driverId: string;
    shiftId: string[];
    area: string[];
    instituteId: string;
    departure: Date;
    arrival: Date;
}
