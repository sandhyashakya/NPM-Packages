import { INSTITUTE_SUBSCRIPTION_PLAN_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IInstituteSubscriptionPlanModelAttributes extends IDefaultAttributes {
    id: string;
    walletTransactionId: string;
    userId: string;
    userUuid: string;
    instituteId: string;
    walletId: string;
    planId: string;
    planUuid: string;
    // maxStorageInGb: number;
    // maxStorageInBytes: number;
    // maxUsers: number;
    usedStorageInBytes: number;
    usedStorageInGb: number;
    usedUsers: number;
    usedStudents: number;
    isPrimary: boolean;
    status: INSTITUTE_SUBSCRIPTION_PLAN_STATUS;
    startDate: Date;
    endDate: Date;
    lastSubscriptionPlan?: string;
}
