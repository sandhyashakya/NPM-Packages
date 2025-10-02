import { Optional } from 'sequelize';
import { IUserHasStorageModelAttributes } from '../interfaces/userHasStorageInterface';

export type TUserHasStorageModelCreationAttributes = Optional<IUserHasStorageModelAttributes, 'id'>;
