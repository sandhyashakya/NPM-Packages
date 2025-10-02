import { IVideoAnalystModelAttributes } from '../interfaces/videoAnalystInterface';

export type TVideoAnalystCreationAttributes = Omit<IVideoAnalystModelAttributes, 'id'>;
