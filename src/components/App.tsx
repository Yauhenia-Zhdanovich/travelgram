import * as React from 'react';

import { ProfilePage } from './ProfilePage/ProfilePage';
import { GlobalStyle } from '../styles/global-styles';

export const App = () => (
  <>
    <GlobalStyle />
    <ProfilePage />
  </>
);
