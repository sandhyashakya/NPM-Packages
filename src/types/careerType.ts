import { ICareerModelAttributes } from '../interfaces/careerInterface';

export type TCareerModelCreationAttributes = Omit<ICareerModelAttributes, 'id'>;
