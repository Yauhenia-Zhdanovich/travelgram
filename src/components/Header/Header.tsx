import * as React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';

const logo = require('../../assets/logo_travelgram.png');

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LogoImage = styled.img`
  height: 45px;
  width: auto;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <LogoImage src={logo.default} alt="" />
      <TextField className="search-input" id="search" label="Outlined" />
      <nav>
        <FontAwesomeIcon icon={faHouseUser} />
        <FontAwesomeIcon icon={faPlus} />
        <div></div>
      </nav>
    </StyledHeader>
  );
};
