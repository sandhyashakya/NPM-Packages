import { Optional } from 'sequelize';
import { IFeeHistoryModelAttributes } from '../interfaces/feeHistoryInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';
import { IUserAttributes } from '../interfaces/userInterface';

export type TFeeHistoryModelCreationAttributes = Optional<IFeeHistoryModelAttributes, 'id'>;

export type TFeeHistoryAttributesWithAssociations = TFeeHistoryModelCreationAttributes & { feeHistoryFile?: IFileStorageAttributes } & {
    feeHistoryUser?: IUserAttributes & { studentData?: { [key: string]: string | string[] | number | undefined } } & {
        userImg?: { [key: string]: string | string[] | number | undefined };
    };
};
