import { IJobApplyAttributes } from '../interfaces/jobApplyInterface';
export type TJobApplyCreationAttributes = Omit<IJobApplyAttributes, 'id'>;
