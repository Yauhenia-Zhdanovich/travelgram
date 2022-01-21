import { ImageItem } from '../interfaces';

export const mapImageUrl: (images: Array<string>) => Array<ImageItem> = (
  images: Array<string>,
) =>
  images.map((image: string, index: number) => ({
    url: `http://localhost:3000/${image}`,
    id: `id-${index}-${image}`,
  }));
