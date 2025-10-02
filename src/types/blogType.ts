import { IBlogModelAttributes } from '../interfaces/blogInterface';

export type TBlogModelCreationAttributes = Omit<IBlogModelAttributes, 'id'>;
