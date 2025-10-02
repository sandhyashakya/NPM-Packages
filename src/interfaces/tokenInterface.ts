import { TOKEN_TYPES } from '../constants/app';
import { IDefaultAttributes } from './commanInterface';

export interface ITokenAttributes extends IDefaultAttributes {
    id?: string;
    token: string;
    userId?: string;
    type: TOKEN_TYPES;
    expiresAt?: Date;
    blacklisted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ITokenDao {
    findOne(where: Partial<ITokenAttributes>): Promise<ITokenAttributes | null>;
    createMultiple: (data: ITokenAttributes[]) => Promise<ITokenAttributes[]>;
    findByWhere: (where: Partial<ITokenAttributes>) => Promise<ITokenAttributes[]>;
    deleteByWhere: (where: Partial<ITokenAttributes>) => Promise<number>;
}

export interface ITokenService {
    findAllTokensByFilter: (where: Partial<ITokenAttributes>) => Promise<ITokenAttributes[]>;
    findOneTokenByFilter: (where: Partial<ITokenAttributes>) => Promise<ITokenAttributes | null>;
    createMultipleTokens: (tokenData: ITokenAttributes[]) => Promise<ITokenAttributes[]>;
    deleteUserTokens: (where: object) => Promise<number>;
    generateToken: (userId: string, expires: Date, type: TOKEN_TYPES) => string;
    verifyTokenByType: (token: string, type: TOKEN_TYPES) => Promise<ITokenAttributes | null>;
    generateAppleClientSecret: (appId: string) => string;
}
