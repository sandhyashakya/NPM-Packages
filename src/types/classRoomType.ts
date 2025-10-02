import { Optional } from 'sequelize';
import { IClassRoomModelAttributes } from '../interfaces/classRoomInterface';

export type TClassRoomModelCreationAttributes = Optional<IClassRoomModelAttributes, 'id'>;
