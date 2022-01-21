import * as React from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { Header } from '../Header/Header';
import { ProfileInfoSection } from '../ProfileInfoSection/ProfileInfoSection';
import { ImageGrid } from '../ImageGrid/ImageGrid';
import { mapImageUrl } from '../../utils/index';
import { ImageItem } from '../../interfaces';

const ProfilePageMain = styled.main`
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  max-width: 935px;
  width: 100% - 40px;
`;

export const ProfilePage = (props: { userId: string }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await axios.get(
        `http://localhost:3000/profile/${props.userId}`,
      );
      const mappedUser = {
        ...fetchedUser.data,
        photos: mapImageUrl(fetchedUser.data?.photos),
      };
      setUser(mappedUser);
    };
    fetchUser();
  }, []);

  return (
    <ProfilePageMain>
      <Header />
      <ProfileInfoSection />
      <ImageGrid images={user?.photos} />
      Profile Page
    </ProfilePageMain>
  );
};
