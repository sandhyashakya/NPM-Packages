import { IDailyBookModelAttributes } from '../interfaces/dailyBookInterface';

export type TDailyBookModelCreationAttributes = Omit<IDailyBookModelAttributes, 'id'>;
