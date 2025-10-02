import { Optional } from 'sequelize';
import { IUserHasCourseModelAttributes } from '../interfaces/userHasCourseInterface';

// export type TUserHasCourseModelCreationAttributes = Partial<IUserHasCourseModelAttributes>;
export type TUserHasCourseModelCreationAttributes = Optional<IUserHasCourseModelAttributes, 'id'>;
