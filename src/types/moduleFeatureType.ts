import { Optional } from 'sequelize';
import { IModuleFeatureAttributes } from '../interfaces/moduleFeatureInterface';

export type TModuleFeatureCreationAttributes = Optional<IModuleFeatureAttributes, 'id'>;
