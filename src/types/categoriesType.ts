import { Optional } from 'sequelize';
import { ICategoriesModelAttributes } from '../interfaces/categoriesInterface';

export type TCategoriesModelCreationAttributes = Optional<ICategoriesModelAttributes, 'id'>;
