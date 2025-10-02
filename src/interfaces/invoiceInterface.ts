import { Document } from 'mongoose';

import { COMMAN_STATUS, PURCHASE_STATUS, INVOICE_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IPurchaseSchema {
    id: string;
    productId: string;
    quantity: number;
}

export interface IFileStorageItemsSchema {
    type: INVOICE_TYPE;
    fileStorageId: string;
}

export interface IInvoiceModelAttributes extends IDefaultAttributes, Document {
    id: string;
    date: Date;
    dueDate: Date;
    vendorId: string;
    invoiceNo: string;
    gstAmount: number;
    purchaseNo: string;
    totalAmount: number;
    instituteId: string;
    purchaseType: string;
    status: COMMAN_STATUS;
    academicYearId: string;
    totalPaidAmount: number;
    fileStorageIds: string[];
    amountStatus: PURCHASE_STATUS;
    purchaseList: IPurchaseSchema[];
    fileStorageList: IFileStorageItemsSchema[];
}
