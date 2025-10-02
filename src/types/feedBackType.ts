import { IFeedBackModelAttributes } from '../interfaces/feedBackInterface';

export type TFeedBackModelCreationAttributes = Omit<IFeedBackModelAttributes, 'id'>;
