import { Optional } from 'sequelize';
import { IUserHasRollNumberModelAttributes } from '../interfaces/userHasRollNumberInterface';

export type TUserHasRollNumberModelCreationAttributes = Optional<IUserHasRollNumberModelAttributes, 'id'>;
