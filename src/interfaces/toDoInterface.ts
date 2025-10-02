import { TO_DO_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IToDoModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId?: string;
    task: string;
    userId: string;
    dueDate?: Date;
    remindMe?: Date;
    status: TO_DO_STATUS;
}
