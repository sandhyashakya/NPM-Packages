import { SOCKET_EVENTS } from '../constants/app';

export type TApiResponse = {
    statusCode: number;
    status: boolean;
    message: string;
    data?: [] | object | null;
    dataDetails?: [] | object | null;
    error?: string | [] | object;
};
export type TPaginastionOptions<T> = {
    limit: number | undefined;
    totalRecords: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    currentPage: number;
    recordList?: T[];
};
export type TPdfOption = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    templateName: string;
    customPath?: string;
    customPdfOptions?: object;
    customFileName?: string;
    customstoragePath?: string;
};
export type TChangePassword = {
    userId?: number;
    oldPassword: string;
    newPassword: string;
};

export type TWhereOptions<T> = {
    [P in keyof T]?: {
        eq?: T[P]; // =
        ne?: T[P]; // !=
        gte?: T[P]; // >=
        gt?: T[P]; // >
        lte?: T[P]; // <=
        lt?: T[P]; // <
        // not?: T[P]; // NOT
        is?: T[P]; // IS
        notIn?: T[P][]; // NOT IN
        in?: T[P][]; // IN
        like?: string; // LIKE
        notLike?: string; // NOT LIKE
        iLike?: string; // ILIKE
        notILike?: string; // NOT ILIKE
        startsWith?: string; // STARTS WITH
        endsWith?: string; // ENDS WITH
        substring?: string; // SUBSTRING
        regexp?: string; // REGEXP
        notRegexp?: string; // NOT REGEXP
        iRegexp?: string; // IREGEXP
        notIRegexp?: string; // NOT IREGEXP
        between?: [T[P], T[P]]; // BETWEEN
        notBetween?: [T[P], T[P]]; // NOT BETWEEN
        overlap?: T[P][]; // OVERLAP
        contains?: T[P][]; // CONTAINS
        contained?: T[P][]; // CONTAINED
        adjacent?: T[P][]; // ADJACENT
        strictLeft?: T[P][]; // STRICT LEFT
        strictRight?: T[P][]; // STRICT RIGHT
        noExtendRight?: T[P][]; // NO EXTEND RIGHT
        noExtendLeft?: T[P][]; // NO EXTEND LEFT
        and?: TWhereOptions<T>[]; // AND
        or?: TWhereOptions<T>[]; // OR
        not?: TWhereOptions<T>; // NOT
    };
};

export type TSocketEventPayload = {
    eventName?: SOCKET_EVENTS;
    payload: {
        event: SOCKET_EVENTS;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
    };
};

export type socketPayload = {
    event: SOCKET_EVENTS;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
};
