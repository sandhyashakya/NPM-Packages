import { Optional } from 'sequelize';
import { IFeeReminderModelAttributes } from '../interfaces/feeReminderInterface';

export type TFeeReminderModelCreationAttributes = Optional<IFeeReminderModelAttributes, 'id'>;
