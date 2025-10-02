import { ITaskManagementModelAttributes } from '../interfaces/taskManagementInterface';

export type TTaskManagementCreationAttributes = Omit<ITaskManagementModelAttributes, 'id'>;
