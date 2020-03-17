import React from 'react';
import { render } from 'react-dom';

import { App } from './modules/app';

const app = <App />;
const root = document.querySelector('#root');

render(app, root);
