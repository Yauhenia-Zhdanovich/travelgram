import * as React from 'react';
import * as ReactDom from 'react-dom';
import { App } from './components/App';

ReactDom.render(
  <App userName="Beveloper" lang="Typescript" />,
  document.getElementById('react-dom-container'),
);
