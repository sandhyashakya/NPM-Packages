import { IDefaultAttributes } from './commanInterface';
import { COMMAN_STATUS, BOOLEAN_STATUS } from '../constants/app';

export interface IBankAccountDetailsInterfaceModelAttributes extends IDefaultAttributes {
    id: string;
    accountHolderName: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    ifscCode: string;
    instituteId: string;
    status: COMMAN_STATUS;
    isDefault: BOOLEAN_STATUS;
    isSelfAccount: BOOLEAN_STATUS;
}
