import { Optional } from 'sequelize';
import { IUserRequiredStepsAttributes } from '../interfaces/userRequiredStepsInterface';

export type TUserRequiredStepsAttributes = Optional<IUserRequiredStepsAttributes, 'id'>;
