import { Optional } from 'sequelize';
import { INotificationModelAttributes } from '../interfaces/sendNotificationInerface';

export type TNotificationModelCreationAttributes = Optional<INotificationModelAttributes, 'id'>;
