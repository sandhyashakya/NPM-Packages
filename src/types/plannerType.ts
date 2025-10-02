import { IPlannerModelAttributes } from '../interfaces/plannerInterface';

export type TPlannerCreationAttributes = Omit<IPlannerModelAttributes, 'id'>;
export interface TUpdatePlannerDataParams {
    academicCalenderId?: string | null;
    instituteId?: string | null;
    syncAll?: boolean;
}
