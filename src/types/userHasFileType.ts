import { Optional } from 'sequelize';
import { IUserHasFileModelAttributes } from '../interfaces/userHasFileInterface';

export type TUserHasFileCreationAttributes = Optional<IUserHasFileModelAttributes, 'id'>;
