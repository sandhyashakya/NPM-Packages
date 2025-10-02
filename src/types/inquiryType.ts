import { IInquiryModelAttributes } from '../interfaces/inquiryInterface';

export type TInquiryModelCreationAttributes = Omit<IInquiryModelAttributes, 'id'>;
