import * as React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const logo = require('../../assets/photo_11.jpg');

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

export const Navigation = () => {
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
        <div></div>
      </NavigationItem>
    </NavigationContainer>
  );
};
