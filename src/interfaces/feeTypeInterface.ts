import { IDefaultAttributes } from './commanInterface';
import { FEE_TYPE, COMMAN_STATUS, FEE_TYPE_FREQUENCY, BOOLEAN_STATUS } from '../constants/app';

export interface IFeeTypeModelAttributes extends IDefaultAttributes {
    id: string;
    typeManagementId: string;
    frequency: FEE_TYPE_FREQUENCY;
    feeType: FEE_TYPE;
    module: COMMAN_STATUS;
    status: COMMAN_STATUS;
    account: string;
    instituteId: string;
    isDefault: BOOLEAN_STATUS;
}
