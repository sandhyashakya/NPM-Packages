import { INSTITUTE_ENTITY_TYPE_SEQUENCE, INSTITUTE_ENTITY_TYPE_STATUS } from '../constants/app';
// import { TInstituteEntityTypeCreationAttributes } from '../types/instituteEntityTypeType';
import { IDefaultAttributes } from './commanInterface';

export interface IInstituteEntityTypeAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    subTitle: string;
    svgUrl?: string;
    status?: INSTITUTE_ENTITY_TYPE_STATUS;
    sequence?: INSTITUTE_ENTITY_TYPE_SEQUENCE;
}
