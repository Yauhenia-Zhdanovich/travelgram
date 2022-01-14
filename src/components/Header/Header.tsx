import * as React from 'react';

import styled from 'styled-components';

import { SimpleInput } from '../SimpleInput';
import { Navigation } from '../Navigation';

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
      <SimpleInput placeholder="Search" />
      <Navigation />
    </StyledHeader>
  );
};
