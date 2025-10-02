import { Optional } from 'sequelize';
import { IWorkingDayAttributes } from '../interfaces/workingDayInterface';

export type TWorkingDayCreationAttributes = Optional<IWorkingDayAttributes, 'id'>;
