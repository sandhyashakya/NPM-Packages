/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterQuery, InsertManyOptions, MongooseUpdateQueryOptions, QueryOptions } from 'mongoose';
import { BulkCreateOptions, CountOptions, CreateOptions, FindOptions, FindOrCreateOptions, UpdateOptions, WhereOptions } from 'sequelize';

export interface IDefaultAttributes {
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedBy?: string;
    deletedAt?: Date | string;
}

export interface IEmailOptions {
    from?: string;
    to: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    subject: string;
    text?: string;
    html?: string;
    attachments?: {
        filename: string;
        path: string;
    }[];
}

export interface ICommanDao<IModelAttributes, TCreationAttributes> {
    findAll: (where: WhereOptions<IModelAttributes>, options?: FindOptions<IModelAttributes>) => Promise<IModelAttributes[]>;
    findOne(where: WhereOptions<IModelAttributes>, options?: FindOptions<IModelAttributes>): Promise<IModelAttributes | null>;
    update: (
        where: WhereOptions<IModelAttributes>,
        updateData: Partial<TCreationAttributes>,
        options: Omit<UpdateOptions<IModelAttributes>, 'where'>,
    ) => Promise<[affectedCount: number]>;
    create: (createData: TCreationAttributes, options: CreateOptions) => Promise<IModelAttributes>;
    bulkCreate: (createData: TCreationAttributes[], options: BulkCreateOptions) => Promise<IModelAttributes[]>;
}

export interface ICountDao<IModelAttributes> {
    count: (where: WhereOptions<IModelAttributes>, options?: CountOptions<IModelAttributes>) => Promise<number>;
}

export interface IDeleteDao<IModelAttributes> {
    delete: (where: WhereOptions<IModelAttributes>, options?: CountOptions<IModelAttributes>) => Promise<number>;
}
export interface IFindAllDao<IModelAttributes> {
    findAll: (where: WhereOptions<IModelAttributes>, options?: FindOptions<IModelAttributes>) => Promise<IModelAttributes[]>;
}

export interface IFindOneDao<IModelAttributes> {
    findOne(where: WhereOptions<IModelAttributes>, options?: FindOptions<IModelAttributes>): Promise<IModelAttributes | null>;
}
export interface IUpsertDao<IModelAttributes> {
    upsert: (
        where: WhereOptions<IModelAttributes>,
        updateData: FindOrCreateOptions<IModelAttributes>,
        options: Omit<FindOrCreateOptions<IModelAttributes>, 'where'>,
    ) => Promise<[IModelAttributes, boolean]>;
}
export interface ICommanMongoDao<IModelAttributes, TCreationAttributes> {
    findAll: (where: FilterQuery<IModelAttributes>, options?: QueryOptions<IModelAttributes>) => Promise<IModelAttributes[]>;
    findOne(where: FilterQuery<IModelAttributes>, options?: QueryOptions<IModelAttributes>): Promise<IModelAttributes | null>;
    update: (
        where: FilterQuery<IModelAttributes>,
        updateData: Partial<TCreationAttributes>,
        options?: MongooseUpdateQueryOptions<IModelAttributes> | null,
    ) => Promise<any>;
    create: (createData: TCreationAttributes, options?: CreateOptions) => Promise<IModelAttributes>;
    bulkCreate: (createData: TCreationAttributes[], options?: InsertManyOptions) => Promise<IModelAttributes[] | undefined>;
}
