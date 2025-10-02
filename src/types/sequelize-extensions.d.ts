/* eslint-disable @typescript-eslint/no-explicit-any */
import 'sequelize';

declare module 'sequelize' {
    interface DestroyOptions {
        userId?: string;
        model?: any;
    }
    interface FindOptions {
        userId?: string;
        page?: number;
        syncUserPayoutLastCalculatedAt?: boolean;
    }
    interface UpdateOptions {
        userId?: string;
        attributes?: any;
    }
    interface BulkCreateOptions {
        userId?: string;
    }
    interface CreateOptions {
        userId?: string;
    }
}
