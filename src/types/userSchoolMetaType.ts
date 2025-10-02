import { Optional } from 'sequelize';
import { IUserSchoolMetaModelAttributes } from '../interfaces/userSchoolMetaInterface';

export type TUserSchoolMetaModelCreationAttributes = Optional<IUserSchoolMetaModelAttributes, 'id'>;
