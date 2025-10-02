import { Optional } from 'sequelize';
import { IFacilityAttributes } from '../interfaces/facilityInterface';

export type TFacilityCreationAttributes = Optional<IFacilityAttributes, 'id'>;
