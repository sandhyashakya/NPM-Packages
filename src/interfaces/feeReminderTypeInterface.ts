import { Document } from 'mongoose';
import { FEE_REMINDER_SETTING_FREQUENCY, FEE_REMINDER_SETTING_TYPE } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeeReminderTypeModelAttributes extends IDefaultAttributes, Document {
    id: string;
    type: FEE_REMINDER_SETTING_TYPE;
    day: number;
    frequency: FEE_REMINDER_SETTING_FREQUENCY;
    instituteId: string;
}
