import * as React from 'react';

import styled from 'styled-components';

export interface ImageItem {
  img: string;
  id: string;
}

const ImageGridSection = styled.section``;

export const ImageGrid = (props: { images: Array<ImageItem> }) => {
  return (
    <section>
      {props.images.map(image => (
        <div key={image.id}>
          <img src={image.img} alt="" />
        </div>
      ))}
    </section>
  );
};
