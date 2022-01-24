import * as React from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { Header } from '../Header/Header';
import { ProfileInfoSection } from '../ProfileInfoSection/ProfileInfoSection';
import { ImageGrid } from '../ImageGrid';
import { mapImageUrl } from '../../utils/index';

import { ErrorBoundary } from '../ErrorBoundary';

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
      {user && (
        <>
          <Header />
          <ProfileInfoSection />
          <ErrorBoundary errorText="fksl">
            <ImageGrid images={user?.photos} />
          </ErrorBoundary>
        </>
      )}
    </ProfilePageMain>
  );
};
