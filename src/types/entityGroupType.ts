import { Optional } from 'sequelize';
import { IEntityGroupModelAttributes } from '../interfaces/entityGroupInterface';

export type TEntityGroupModelCreationAttributes = Optional<IEntityGroupModelAttributes, 'id'>;
