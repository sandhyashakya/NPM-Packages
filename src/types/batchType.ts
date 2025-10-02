import { Optional } from 'sequelize';
import { IBatchModelAttributes } from '../interfaces/batchInterface';
import { ILectureModelAttributes } from '../interfaces/lectureInterface';

export type TBatchModelCreationAttributes = Optional<IBatchModelAttributes, 'id'>;

export type TBatchWithAssociationsAttributes = IBatchModelAttributes & { batchHasLectures?: ILectureModelAttributes[] };
