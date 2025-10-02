import { IDashboardManagementAttributes } from '../interfaces/dashboardManagementInterface';

export type TDashboardManagementModelCreationAttributes = Omit<IDashboardManagementAttributes, 'id'>;
