import { Optional } from 'sequelize';
import { IInstituteEntityTypeAttributes } from '../interfaces/instituteEntityTypeInterface';

export type TInstituteEntityTypeCreationAttributes = Optional<IInstituteEntityTypeAttributes, 'id'>;
