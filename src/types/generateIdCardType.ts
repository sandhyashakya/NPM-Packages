import { IGenarateIdCardModelAttributes } from '../interfaces/generateIdCardInterface';

export type TGererateIdCardModelCreationAttributes = Omit<IGenarateIdCardModelAttributes, 'id'>;
