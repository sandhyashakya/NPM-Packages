import { Optional } from 'sequelize';
import { IUserHasOfferModelAttributes } from '../interfaces/userHasOffer';

export type TUserHasOfferModelCreationAttributes = Optional<IUserHasOfferModelAttributes, 'id'>;
