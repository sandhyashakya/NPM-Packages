import { Optional } from 'sequelize';
import { ISchoolFeesCollectionModelAttributes } from '../interfaces/schoolFeeCollectionInterface';

export type TSchoolFeeCollectionModelCreationAttributes = Optional<ISchoolFeesCollectionModelAttributes, 'id'>;
