import { Document } from 'mongoose';
import {
    APP_TYPE,
    COMMAN_STATUS,
    SUBSCRIPTION_PLAN_CHARGE_INTERVAL,
    DISCOUNT_TYPE,
    SUBSCRIPTION_PLAN_FILES_TYPE,
    VALID_CURRENCY,
    USER_TYPES,
} from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
export interface ISubscriptionPlanFiles {
    type: SUBSCRIPTION_PLAN_FILES_TYPE;
    fileStorageId: string;
    status: COMMAN_STATUS;
}

export interface ISubscriptionPlanModelAttributes extends IDefaultAttributes, Document {
    id: string;
    uuid: string;
    title: string;
    descriptions: string;
    maxUsers: number;
    maxStorageInGb: number;
    status: COMMAN_STATUS;
    perUserCharge: number;
    perStudentCharge: number;
    chargeInterval: SUBSCRIPTION_PLAN_CHARGE_INTERVAL;
    discountType: DISCOUNT_TYPE;
    validCurrency: VALID_CURRENCY;
    moduleList: string[];
    files: ISubscriptionPlanFiles[];
    planHistory?: ISubscriptionPlanModelAttributes[];
    userType?: USER_TYPES;
    appType: APP_TYPE;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detailsList?: any;
    sequence: number;
}
