import { IFileStorageAttributes } from '../interfaces/fileStorageInterface';
import { IGreetingsModelAttributes } from '../interfaces/greetingsInterface';

export type TGreetingsModelCreationAttributes = Partial<IGreetingsModelAttributes>;

export type TGreetingAttributesWithAssociations = IGreetingsModelAttributes & { greetingsImage?: IFileStorageAttributes };
