import { COMMAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IRulesRegulationAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    status: COMMAN_STATUS;
    subTitle: string;
    discraption: string;
    instituteId: string;
}
