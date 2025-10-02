import { Optional } from 'sequelize';
import { IRulesRegulationAttributes } from '../interfaces/rulesRegulationInterface';

export type TRulesRegulationCreationAttributes = Optional<IRulesRegulationAttributes, 'id'>;
