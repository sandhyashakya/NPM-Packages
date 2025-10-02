import { Optional } from 'sequelize';
import { ISchoolOffersModelAttributes } from '../interfaces/schoolOfferInterface';

export type TSchoolOfferModelCreationAttributes = Optional<ISchoolOffersModelAttributes, 'id'>;
