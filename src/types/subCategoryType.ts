import { Optional } from 'sequelize';
import { ISubCategoriesModelAttributes } from '../interfaces/subCategoriesInterface';

export type TSubCategoriesModelCreationAttributes = Optional<ISubCategoriesModelAttributes, 'id'>;
