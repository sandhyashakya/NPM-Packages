import { Optional } from 'sequelize';
import { IFeatureActionAttributes } from '../interfaces/featureActionInterface';

export type TFeatureActionCreationAttributes = Optional<IFeatureActionAttributes, 'id'>;
