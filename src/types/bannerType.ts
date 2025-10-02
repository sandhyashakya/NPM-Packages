import { Optional } from 'sequelize';
import { IBannerModelAttributes } from '../interfaces/bannerInterface';
import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';

export type TBannerModelCreationAttributes = Optional<IBannerModelAttributes, 'id'>;

export type TBannerAttributesWithAssociations = IBannerModelAttributes & { bannerFileStorage?: IFileStorageAttributes };
