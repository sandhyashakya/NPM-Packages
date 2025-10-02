import { Optional } from 'sequelize';
import { IUserHasAnnouncementModelAttributes } from '../interfaces/userHasAnnouncementInterface';

export type TUserHasAnnouncementModelCreationAttributes = Optional<IUserHasAnnouncementModelAttributes, 'id'>;
