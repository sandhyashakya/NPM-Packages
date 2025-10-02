import { IToDoModelAttributes } from '../interfaces/toDoInterface';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TToDoModelCreationAttributes = Partial<IToDoModelAttributes>;

export type TToDoWithAssociation = IToDoModelAttributes & {
    workingDay: IWorkingDayAttributes;
};
