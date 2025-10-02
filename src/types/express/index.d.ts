import { IUserAttributes } from '../../interfaces/userInterface';
import { IWalletModelAttributes } from '../../interfaces/walletInterface';

declare global {
    namespace Express {
        export interface Request {
            user: IUserAttributes & { userWallet?: IWalletModelAttributes };
            institutesId?: string;
        }
    }
}
