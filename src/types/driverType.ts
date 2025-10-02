import { IDriverModelAttributes } from '../interfaces/driverInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TDriverModelCreationAttributes = Partial<IDriverModelAttributes>;

export type TDriverWithAssociation = IDriverModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
