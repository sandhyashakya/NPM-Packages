import { IDefaultAttributes } from './commanInterface';

export interface IFeeReminderModelAttributes extends IDefaultAttributes {
    id: string;
    userId: string;
    instituteId: string;
    sendDate: Date;
    templateId: string;
    batchId: string;
    subjectId?: string;
    feeCollectionId: string;
    dueDate: Date;
    dueAmount: number;
}
