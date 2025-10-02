import { Optional } from 'sequelize';
import { IInstituteEntityAttributes } from '../interfaces/instituteEntityInterface';

export type TInstituteEntityCreationAttributes = Optional<IInstituteEntityAttributes, 'id'>;

export type TInstituteEntityWithAssociation = IInstituteEntityAttributes & {
    entities?: IInstituteEntityAttributes[];
};
