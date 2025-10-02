import { Optional } from 'sequelize';
import { IInstituteSubscriptionPlanModelAttributes } from '../interfaces/instituteSubscriptionPlanInterface';

export type TInstituteSubscriptionPlanModelCreationAttributes = Optional<IInstituteSubscriptionPlanModelAttributes, 'id'>;
