import { Document } from 'mongoose';
import { IDefaultAttributes } from '../interfaces/commanInterface';
import { LANGUAGES } from '../constants/app';

export interface IDescription {
    videoId: string[];
    videoUrl: string[];
    description: string;
    language: LANGUAGES;
}

export interface IInformationSupportModelAttributes extends IDefaultAttributes, Document {
    id: string;
    title: string;
    number: number;
    information: IDescription[];
}
