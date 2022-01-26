import { ImageItem } from '../interfaces';

import { hostPath } from '../constants';

export const mapImageUrl: (images: Array<string>) => Array<ImageItem> = (
  images: Array<string>,
) =>
  images.map((image: string, index: number) => ({
    url: `${hostPath}/${image}`,
    id: `id-${index}-${image}`,
  }));
