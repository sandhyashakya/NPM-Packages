import { COMMAN_STATUS, DISCOUNT_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ICoinPurchaseOfferModelAttributes extends IDefaultAttributes {
    id: string;
    title?: string;
    discountType: DISCOUNT_TYPE;
    discount: number;
    amount: number;
    coin: number;
    totalCoin: number;
    isDefault: boolean;
    status: COMMAN_STATUS;
    gstCharge: number;
    payableAmount: number;
    gstPercentage: number;
}
