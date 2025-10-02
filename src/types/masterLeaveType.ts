import { Optional } from 'sequelize';
import { IMasterLeaveModelAttributes } from '../interfaces/masterLeaveInterface';

export type TMasterLeaveModelCreationAttributes = Optional<IMasterLeaveModelAttributes, 'id'>;
