import * as React from 'react';

import styled from 'styled-components';

import { Header } from '../Header/Header';
import { ProfileInfoSection } from '../ProfileInfoSection/ProfileInfoSection';
import { ImageGrid } from '../ImageGrid/ImageGrid';
import { mockPhotos } from '../../mock-data/mock-photos';

const ProfilePageMain = styled.main`
  margin: 0 auto;
  padding: 0 40px;
`;

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
