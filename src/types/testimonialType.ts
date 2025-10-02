import { ITestimonialModelAttributes } from '../interfaces/testimonialInterface';
import { IUserAttributes } from '../interfaces/userInterface';

export type TTestimonialModelCreationAttributes = Partial<ITestimonialModelAttributes>;

export type TTestimonialAttributesWithAssociations = TTestimonialModelCreationAttributes & {
    testimonialUser?: IUserAttributes & {
        userImg?: { [key: string]: string | string[] | number | undefined };
    };
    testimonialInstitute?: { [key: string]: string | string[] | number | undefined };
};
