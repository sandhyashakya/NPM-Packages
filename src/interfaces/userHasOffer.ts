import { IDefaultAttributes } from './commanInterface';

export interface IUserHasOfferModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId?: string;
    feeCollectionId?: string;
    courseId?: string;
    offerId: string;
    discountAmount: number;
}
