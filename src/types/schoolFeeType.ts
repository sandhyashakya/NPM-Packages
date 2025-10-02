import { Optional } from 'sequelize';
import { ISchoolFeeModelAttributes } from '../interfaces/schoolFeeInterface';

export type TSchoolFeeModelCreationAttributes = Optional<ISchoolFeeModelAttributes, 'id'>;
