import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS } from '../constants/app';

export interface IClassRoomModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    classroomNumber?: string;
    status: COMMAN_STATUS;
    color: string;
    capacity: number;
    instituteId: string;
    floorId?: string;
    typeManagementId?: string;
}
