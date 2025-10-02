// import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';
import { IHolidayModelAttributes } from '../interfaces/holidayInterface';

export type THolidayModelCreationAttributes = Omit<IHolidayModelAttributes, 'id'>;

// export type THolidayAttributesWithAssociations = IHolidayModelAttributes & { holidayFileStorage?: IFileStorageAttributes };
