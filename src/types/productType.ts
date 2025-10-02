import { Optional } from 'sequelize';
import { IProductModelAttributes } from '../interfaces/productInterface';

export type TProductsModelCreationAttributes = Optional<IProductModelAttributes, 'id'>;
