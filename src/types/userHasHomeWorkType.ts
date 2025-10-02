import { Optional } from 'sequelize';
import { IUserHasHomeWorkModelAttributes } from '../interfaces/userHasHomeWorkInterface';

export type TUserHasHomeWorkAttributes = Optional<IUserHasHomeWorkModelAttributes, 'id'>;
