import { Optional } from 'sequelize';
import { IFeesCollectionModelAttributes } from '../interfaces/feesCollectionInterface';

export type TFeesCollectionModelCreationAttributes = Optional<IFeesCollectionModelAttributes, 'id'>;
