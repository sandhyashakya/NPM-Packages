import { Optional } from 'sequelize';
import { IUserHasParentAttributes } from '../interfaces/userHasParentInterface';

export type TUserHasParentCreationAttributes = Optional<IUserHasParentAttributes, 'id'>;

export type TCreateParentUserType = {
    id: string;
    instituteAccess?: string[];
};
export type TCreateParentType = IUserHasParentAttributes & { users: TCreateParentUserType[] };
