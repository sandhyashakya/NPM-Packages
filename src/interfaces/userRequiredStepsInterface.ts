import { APP_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserRequiredStepsAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    stepNumber: number;
    isCompleted: boolean;
    appType: APP_TYPE;
}
