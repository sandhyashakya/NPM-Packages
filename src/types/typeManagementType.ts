import { Optional } from 'sequelize';
import { ITypeManagementModelAttributes } from '../interfaces/typeManagementInterface';

export type TTypeManagementModelCreationAttributes = Optional<ITypeManagementModelAttributes, 'id'>;
