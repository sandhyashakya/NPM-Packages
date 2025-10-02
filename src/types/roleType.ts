import { Optional } from 'sequelize';
import { IRoleAttributes } from '../interfaces/roleInterface';
import { IModuleAttributes } from '../interfaces/moduleInterface';
import { IModuleFeatureAttributes } from '../interfaces/moduleFeatureInterface';
import { IFeatureActionAttributes } from '../interfaces/featureActionInterface';

export type TRoleCreationAttributes = Optional<IRoleAttributes, 'id'>;

export type TRolePermission = {
    modules: IModuleAttributes[];
    features: IModuleFeatureAttributes[];
    actions: IFeatureActionAttributes[];
};
