import * as React from 'react';

import styled from 'styled-components';

import { Header } from '../Header/Header';
import { ProfileInfoSection } from '../ProfileInfoSection/ProfileInfoSection';
import { ImageGrid, ImageItem } from '../ImageGrid/ImageGrid';

const ProfilePageMain = styled.main`
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  max-width: 935px;
  width: 100% - 40px;
`;

const image1 = require('../../assets/photo_1.jpg');
const image2 = require('../../assets/photo_2.jpg');
const image3 = require('../../assets/photo_3.jpg');
const image4 = require('../../assets/photo_4.jpg');
const image5 = require('../../assets/photo_5.jpg');
const image6 = require('../../assets/photo_6.jpg');
const image7 = require('../../assets/photo_7.jpg');
const image8 = require('../../assets/photo_8.jpg');
const image9 = require('../../assets/photo_9.jpg');
const image10 = require('../../assets/photo_10.jpg');
const image11 = require('../../assets/photo_11.jpg');
const image12 = require('../../assets/photo_12.jpg');
const image13 = require('../../assets/photo_13.jpg');
const image14 = require('../../assets/photo_14.jpg');
const image15 = require('../../assets/photo_15.jpg');
const image16 = require('../../assets/photo_16.jpg');
const image17 = require('../../assets/photo_17.jpg');
const image18 = require('../../assets/photo_18.jpg');

export const mockPhotos: Array<ImageItem> = [
  {
    img: image1.default,
    id: 'photo_1',
  },
  {
    img: image2.default,
    id: 'photo_2',
  },
  {
    img: image3.default,
    id: 'photo_3',
  },
  {
    img: image4.default,
    id: 'photo_4',
  },
  {
    img: image5.default,
    id: 'photo_5',
  },
  {
    img: image6.default,
    id: 'photo_6',
  },
  {
    img: image7.default,
    id: 'photo_7',
  },
  {
    img: image8.default,
    id: 'photo_8',
  },
  {
    img: image9.default,
    id: 'photo_9',
  },
  {
    img: image10.default,
    id: 'photo_10',
  },
  {
    img: image11.default,
    id: 'photo_11',
  },
  {
    img: image12.default,
    id: 'photo_12',
  },
  {
    img: image13.default,
    id: 'photo_13',
  },
  {
    img: image14.default,
    id: 'photo_14',
  },
  {
    img: image15.default,
    id: 'photo_15',
  },
  {
    img: image16.default,
    id: 'photo_16',
  },
  {
    img: image17.default,
    id: 'photo_17',
  },
  {
    img: image18.default,
    id: 'photo_18',
  },
];

export const ProfilePage = () => {
  return (
    <ProfilePageMain>
      <Header />
      <ProfileInfoSection />
      <ImageGrid images={mockPhotos} />
      Profile Page
    </ProfilePageMain>
  );
};
