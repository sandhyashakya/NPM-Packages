import { Optional } from 'sequelize';
import { IInstituteAttributes } from '../interfaces/instituteInterface';

export type TInstituteCreationAttributes = Optional<IInstituteAttributes, 'id'>;
