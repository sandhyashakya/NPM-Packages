import { COMMAN_STATUS, OFFER_NAME, OFFER_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IOffersModelAttributes extends IDefaultAttributes {
    id: string;
    userId?: string;
    instituteId: string;
    type: OFFER_TYPE;
    status?: COMMAN_STATUS;
    name?: string;
    description?: string;
    discount: number;
    maximumDiscount?: number;
    minimumFee?: number;
    startTime?: Date;
    endTime?: Date;
    userLimit?: number;
    offerType: OFFER_NAME;
}
