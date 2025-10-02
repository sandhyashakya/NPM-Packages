import { Optional } from 'sequelize';
import { IAreaModelAttributes } from '../interfaces/areaInterface';

export type TAeraModelCreationAttributes = Optional<IAreaModelAttributes, 'id'>;
