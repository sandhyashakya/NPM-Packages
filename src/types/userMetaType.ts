import { GUARDIANS_USER_META_MODEL_STATUS } from '../constants/app';
import { IUserMetaAttributes } from '../interfaces/userMetaInterface';

export type TUserMetaCreationAttributes = Partial<IUserMetaAttributes>;

export type TParentsUserMetaModelAttributes = {
    id: string;
    isDeleted?: boolean;
};

export type TGuardiansUserMetaModelAttributes = {
    id: string;
    isDeleted?: boolean;
    status?: GUARDIANS_USER_META_MODEL_STATUS;
    instituteAccess?: string[];
};
