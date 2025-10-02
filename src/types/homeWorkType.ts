import { Optional } from 'sequelize';
import { IHomeWorkModelAttributes } from '../interfaces/homeworkInterface';

export type THomeWorkModelCreationAttributes = Optional<IHomeWorkModelAttributes, 'id'>;
