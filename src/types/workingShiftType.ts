import { Optional } from 'sequelize';
import { IWorkingShiftAttributes } from '../interfaces/workingShiftInterface';

export type TWorkingShiftCreationAttributes = Optional<IWorkingShiftAttributes, 'id'>;
