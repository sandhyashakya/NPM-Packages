import { INSTITUTE_ENTITY_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IInstituteEntityAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    svgUrl?: string;
    entityTypeId?: string;
    status?: INSTITUTE_ENTITY_STATUS;
    entityId?: string;
    instituteId?: string;
    isDefault?: boolean;
    code?: string;
    sequenceNumber?: number;
}
