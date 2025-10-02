import { Optional } from 'sequelize';
import { ISubjectHasFeeModelAttributes } from '../interfaces/subjectHasFeeInterface';

export type TSubjectHasFeeModelCreationAttributes = Optional<ISubjectHasFeeModelAttributes, 'id'>;
