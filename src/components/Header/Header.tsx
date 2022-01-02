import * as React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <input type="text" placeholder="search" />
      <nav>
        <FontAwesomeIcon icon={faHouseUser} />
        <FontAwesomeIcon icon={faPlus} />
        <div></div>
      </nav>
    </StyledHeader>
  );
};
