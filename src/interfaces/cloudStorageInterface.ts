import { COMMAN_STATUS, DISCOUNT_TYPE, VALID_CURRENCY } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ICloudStorageModelAttributes extends IDefaultAttributes {
    id: string;
    title: string;
    storageInGb: number;
    chargePerGb: number;
    discountType: DISCOUNT_TYPE;
    discount: number;
    validCurrency: VALID_CURRENCY;
    totalAmount: number;
    totalPayableAmount: number;
    isDefault: boolean;
    status: COMMAN_STATUS;
}
