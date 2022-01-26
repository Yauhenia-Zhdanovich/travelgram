import { ImageItem } from './ImageItem';

export interface User {
  id: string;
  name: string;
  description: string;
  profilePhoto: string;
  photos: Array<ImageItem>;
}
