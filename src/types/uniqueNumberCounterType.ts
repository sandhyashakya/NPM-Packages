import { IUniqueNumberCounterModelAttributes } from '../interfaces/uniqueNumberCounterInterface';

export type TUniqueNumberCounterCreationAttributes = Omit<IUniqueNumberCounterModelAttributes, 'id'>;
