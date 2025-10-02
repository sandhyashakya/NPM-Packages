import { Optional } from 'sequelize';
import { IVehicleModelAttributes } from '../interfaces/vehicleInterface';

export type TVehicleModelCreationAttributes = Optional<IVehicleModelAttributes, 'id'>;
