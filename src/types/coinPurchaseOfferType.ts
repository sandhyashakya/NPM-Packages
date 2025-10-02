import { Optional } from 'sequelize';
import { ICoinPurchaseOfferModelAttributes } from '../interfaces/coinPurchaseOfferInterface';

export type TCoinPurchaseOfferModelCreationAttributes = Optional<ICoinPurchaseOfferModelAttributes, 'id'>;
