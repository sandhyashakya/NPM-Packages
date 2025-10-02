import { IGalleryAlbumAttributes } from '../interfaces/photosGalleryInterface';

export type TPhotosGalleryModelCreationAttributes = Omit<IGalleryAlbumAttributes, 'id'>;
