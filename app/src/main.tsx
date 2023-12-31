import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home/Home';

import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
