import * as React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const NavigationContainer = styled.nav`
  display: flex;
  padding-left: 24px;
  white-space: no-wrap;
`;

const NavigationItem = styled.div`
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
`;

const NavigationItemContainer = styled.div`
  display: flex;
  margin-left: 22px;
  align-items: stretch;
  flex-shrink: 0;
  flex-direction: column;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ProfileImageContainer = styled.span`
  margin-left: 22px;
  display: block;
  border-radius: 50%;
  flex: 0 0 auto;
  position: relative
  width: 24px;
  height: 24px;
`;

const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Navigation = () => {
  const mockedProfileImageUrl: string = 'http://localhost:3000/photo_11.jpg';

  return (
    <NavigationContainer>
      <NavigationItem>
        <NavigationItemContainer>
          <NavigationLink>
            <FontAwesomeIcon icon={faHouseUser} />
          </NavigationLink>
        </NavigationItemContainer>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemContainer>
          <NavigationLink>
            <FontAwesomeIcon icon={faPlus} />
          </NavigationLink>
        </NavigationItemContainer>
      </NavigationItem>
      <NavigationItem>
        <ProfileImageContainer>
          <ProfileImage src={mockedProfileImageUrl} alt="" />
        </ProfileImageContainer>
      </NavigationItem>
    </NavigationContainer>
  );
};
