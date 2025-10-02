import { IDefaultAttributes } from './commanInterface';
import { Document } from 'mongoose';

export interface IVideoAnalystModelAttributes extends IDefaultAttributes, Document {
    id: string;
    appName: string;
    randomNumber: number;
    eventType: string;
    deviceId: string;
    platformName: string;
    deviceType: string;
    deviceName: string;
    fileId: string;
    bundle: string;
    storeUrl: string;
    appVersion: string;
    width: number;
    height: number;
    deviceMaker: string;
    deviceConnectionType: string;
    clintIp: string;
    userId: string;
    instituteId: string;
    geoLocation: {
        country: string;
        region: string;
        city: string;
        latitude: number;
        longitude: number;
    };
    contentDuration: number;
    contentViewDuration: number;
    language: string;
    videoTitle: string;
    subject: string;
    keywords: string[];
    pain: string;
}
