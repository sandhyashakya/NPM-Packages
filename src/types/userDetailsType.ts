import { IUserDetailsAttributes } from '../interfaces/userDetailsInterface';

export type TUserDetailsModelCreationAttributes = Omit<IUserDetailsAttributes, 'id'>;
