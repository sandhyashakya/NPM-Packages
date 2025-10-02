import { ISubscriptionPlanModelAttributes } from '../interfaces/subscriptionPlanInterface';

export type TSubscriptionPlanCreationAttributes = Omit<ISubscriptionPlanModelAttributes, 'id'>;
