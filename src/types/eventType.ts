import { IEventModelAttributes } from '../interfaces/eventInterface';

export type TEventModelCreationAttributes = Omit<IEventModelAttributes, 'id'>;
