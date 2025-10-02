import { IPdcChequeModelAttributes } from '../interfaces/pdcChequeInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TPdcChequeModelCreationAttributes = Partial<IPdcChequeModelAttributes>;

export type TPdcChequeWithAssociation = IPdcChequeModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
