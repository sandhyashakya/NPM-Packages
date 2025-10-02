import { USER_HAS_PARENT_STATUS } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface IUserHasParentAttributes extends IDefaultAttributes {
    id: string;
    parentId: string;
    userId: string;
    status?: USER_HAS_PARENT_STATUS;
    isPrimaryParent?: boolean;
    isGuardianParent?: boolean;
    instituteAccess?: string[];
    securityCode?: string;
    unverifiedInstitute?: string[];
    isDeleted?: boolean;
}
