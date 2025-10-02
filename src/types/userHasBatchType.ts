import { Optional } from 'sequelize';
import { IUserHasBatchModelAttributes } from '../interfaces/userHasBatchInterface';
import { IUserAttributes } from '../interfaces/userInterface';
import { IBatchModelAttributes } from '../interfaces/batchInterface';

export type TUserHasBatchModelCreationAttributes = Optional<IUserHasBatchModelAttributes, 'id'>;

export type TUserHasBatchModelAttributesWithAssociations = IUserHasBatchModelAttributes & {
    user?: IUserAttributes;
    batch?: IBatchModelAttributes;
};
