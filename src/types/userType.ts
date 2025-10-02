import { Optional } from 'sequelize';
import { IUserAttributes } from '../interfaces/userInterface';
import { ITokenAttributes } from '../interfaces/tokenInterface';
import { IUserHasParentAttributes } from '../interfaces/userHasParentInterface';

export type TUserCreationAttributes = Optional<IUserAttributes, 'id'>;
export type TUserParentAttributes = IUserAttributes & { users?: IUserHasParentAttributes[] };

export type TGenerateTokenRes = {
    accessToken: Partial<ITokenAttributes>;
    refreshToken: Partial<ITokenAttributes>;
};
