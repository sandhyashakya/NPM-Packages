import { Optional } from 'sequelize';
import { IContactFeedBackAttributes } from '../interfaces/contactFeedBackInterface';

export type TContactFeedBackModelCreationAttributes = Optional<IContactFeedBackAttributes, 'id'>;
