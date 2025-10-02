import { Optional } from 'sequelize';
import { IOffersModelAttributes } from '../interfaces/offersInterface';

export type TOfferModelCreationAttributes = Optional<IOffersModelAttributes, 'id'>;
