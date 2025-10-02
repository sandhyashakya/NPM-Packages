import { IDefaultAttributes } from './commanInterface';

export interface ICourseHasVisitorsModelAttributes extends IDefaultAttributes {
    id: string;
    courseId: string;
    date: Date;
    visitCount: number;
}
