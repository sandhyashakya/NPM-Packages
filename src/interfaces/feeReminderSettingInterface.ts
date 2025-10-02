import { BOOLEAN_STATUS, FEE_REMINDER_SETTING_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IFeeReminderSettingModelAttributes extends IDefaultAttributes {
    id: string;
    instituteId: string;
    templateData: string;
    status: FEE_REMINDER_SETTING_STATUS;
    typeId: string;
    default: BOOLEAN_STATUS;
    // frequency: FEE_REMINDER_SETTING_FREQUENCY;
    // startDay: number;
}
