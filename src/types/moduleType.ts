import { Optional } from 'sequelize';
import { IModuleAttributes } from '../interfaces/moduleInterface';

export type TModuleCreationAttributes = Optional<IModuleAttributes, 'id'>;
