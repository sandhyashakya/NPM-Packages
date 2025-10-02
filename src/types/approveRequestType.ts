import { IApproveRequestModelAttributes } from '../interfaces/approvalRequestInterface';

export type TApproveRequestCreationAttributes = Omit<IApproveRequestModelAttributes, 'id'>;
