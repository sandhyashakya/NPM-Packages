import { Optional } from 'sequelize';
// import { IClassRoomModelAttributes } from '../interfaces/classRoomInterface';
import { IFloorManagementModelAttributes } from '../interfaces/floorManagementInterface';

export type TFloorManagementCreationAttributs = Optional<IFloorManagementModelAttributes, 'id'>; //TClassRoomModelCreationAttributes
