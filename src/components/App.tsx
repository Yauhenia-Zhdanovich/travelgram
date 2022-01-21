import * as React from 'react';

import styled from 'styled-components';

import { ProfilePage } from './ProfilePage/ProfilePage';
import { GlobalStyle } from '../styles/global-styles';

const mockedId = 'user-0001';

const ModalRoot = styled.div`
  position: relative;
  z-index: 999;
`;

export const App = () => (
  <>
    <GlobalStyle />
    <ProfilePage userId={mockedId} />
    <ModalRoot id="modal-root"></ModalRoot>
  </>
);
