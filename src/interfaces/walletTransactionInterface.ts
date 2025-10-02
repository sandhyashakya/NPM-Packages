import { Document } from 'mongoose';
import {
    PAYMENT_GATEWAY_TYPES,
    WALLET_HISTORY_ACTION,
    WALLET_HISTORY_ITEM_TYPE,
    WALLET_HISTORY_STATUS,
    WALLET_HISTORY_TYPE,
    WALLET_TRANSACTION_USERS_TYPE,
} from '../constants/app';
import { IDefaultAttributes } from './commanInterface';
import { IUserAttributes } from './userInterface';

export interface IWalletTransactionUsers {
    userId: string;
    uuid: string;
    type: WALLET_TRANSACTION_USERS_TYPE;
    action: WALLET_HISTORY_ACTION;
    walletHistoryId: string;
    userDetails?: IUserAttributes;
}

export interface IWalletTransactionModelAttributes extends IDefaultAttributes, Document {
    id: string;
    tId: string; //our unique order id
    ptId: string; // payment gate way uniq order id
    users: IWalletTransactionUsers[];
    type: WALLET_HISTORY_TYPE;
    totalCoin: number;
    itemType: WALLET_HISTORY_ITEM_TYPE;
    // userType?: USER_TYPES;
    instituteId: string;
    isOtpVerified: boolean;
    validOtp?: string;
    voucherCode?: string;
    validDate?: Date;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any;
    status: WALLET_HISTORY_STATUS;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    orderDetails: any;
    paymentGateWayType: PAYMENT_GATEWAY_TYPES;
    refundPtId: PAYMENT_GATEWAY_TYPES; // payment gate way uniq refund order id
    token?: string;
    redirectUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    additionalCharges?: any; // add gst,platformFee,etc
}
