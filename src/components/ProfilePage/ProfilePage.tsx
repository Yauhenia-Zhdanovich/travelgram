import * as React from 'react';

import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';

import { mapImageUrl } from '../../utils';

import { hostPath } from '../../constants';
import { User, UserBE } from '../../interfaces';

import { Header } from '../Header';
import { ProfileInfoSection } from '../ProfileInfoSection';
import { ImageGrid } from '../ImageGrid';
import { ErrorBoundary } from '../ErrorBoundary';

const ProfilePageMain = styled.main`
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  max-width: 935px;
  width: 100% - 40px;
`;

export const ProfilePage = (props: { userId: string }) => {
  const [user, setUser]: [User, (user: User) => any] = React.useState(null);

  React.useEffect(() => {
    const fetchUser: () => void = async () => {
      const fetchedUser: AxiosResponse<UserBE, {}> = await axios.get(
        `${hostPath}/profile/${props.userId}`,
      );
      const mappedUser: User = {
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
          <Header profilePhoto={user?.profilePhoto} />
          <ProfileInfoSection
            profilePhoto={user?.profilePhoto}
            profileDescription={user?.description}
          />
          <ErrorBoundary errorText="no-images-for-the-user">
            <ImageGrid images={user?.photos} />
          </ErrorBoundary>
        </>
      )}
    </ProfilePageMain>
  );
};
