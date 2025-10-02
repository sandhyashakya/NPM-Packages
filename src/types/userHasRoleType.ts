import { Optional } from 'sequelize';
import { IUserHasRoleAttributes } from '../interfaces/userHasRoleInterface';

export type TUserHasRoleCreationAttributes = Optional<IUserHasRoleAttributes, 'id'>;
