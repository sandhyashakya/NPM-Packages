import { Optional } from 'sequelize';
import { IFeeReminderSettingModelAttributes } from '../interfaces/feeReminderSettingInterface';

export type TFeeReminderSettingModelCreationAttributes = Optional<IFeeReminderSettingModelAttributes, 'id'>;
