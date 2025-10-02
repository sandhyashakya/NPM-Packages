import { COMMAN_STATUS, GREETING_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IGreetingsModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    greetingType: GREETING_TYPE;
    isDefault: boolean;
    templateData: string;
    status: COMMAN_STATUS;
    title: string;
    image: string;
}
