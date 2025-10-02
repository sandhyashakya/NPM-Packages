import { Optional } from 'sequelize';

import { IVendorModelAttributes } from '../interfaces/vendorManagementInterface';

export type TVendorCreationAttributes = Optional<IVendorModelAttributes, 'id'>;
