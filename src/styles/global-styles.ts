import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  #simple-input {
    padding: 5px 0;
    font-size: 12px;
  }

  .MuiInputAdornment-root {
    font-size: 9px;
    padding-left: 0;
  }
`;
