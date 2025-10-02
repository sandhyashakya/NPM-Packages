import { SCHOOL_SHIFT } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ISlotModelAttributes extends IDefaultAttributes {
    id: string;
    name: string;
    instituteId: string;
    type: SCHOOL_SHIFT;
}
