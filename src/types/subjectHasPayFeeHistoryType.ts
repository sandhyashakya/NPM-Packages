import { Optional } from 'sequelize';
import { ISubjectHasPayFeeHistoryModelAttributes } from '../interfaces/subjectHasPayFeeHistoryInterface';

export type TSubjectHasPayFeeHistoryModelCreationAttributes = Optional<ISubjectHasPayFeeHistoryModelAttributes, 'id'>;
