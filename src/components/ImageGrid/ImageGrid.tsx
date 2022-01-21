import * as React from 'react';

import styled from 'styled-components';

import { ImageItem } from '../../interfaces';

const ImageGridSection = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  overflow: hidden;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

export const ImageGrid = (props: { images: Array<ImageItem> }) => {
  return (
    <div>
      <ImageGridSection>
        {props.images?.map(image => (
          <ImageContainer key={image.id}>
            <Image src={image.url} alt="" />
          </ImageContainer>
        ))}
      </ImageGridSection>
    </div>
  );
};
