import { Optional } from 'sequelize';
import { IAnnouncementModelAttributes } from '../interfaces/announcementInterface';

export type TAnnouncementModelCreationAttributes = Optional<IAnnouncementModelAttributes, 'id'>;

export type TAnnouncementCreateParams = {
    announcementId?: string;
    // entityIds?: string[];
};
