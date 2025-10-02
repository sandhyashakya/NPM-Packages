import { IFeeHistoryDetailsModelAttributes } from '../interfaces/feeHistoryDetailsInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TFeeHistoryDetailsModelCreationAttributes = Partial<IFeeHistoryDetailsModelAttributes>;

export type TFeeHistoryDetailsWithAssociation = IFeeHistoryDetailsModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
