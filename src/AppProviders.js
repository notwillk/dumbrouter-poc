import React, { Suspense } from 'react';
import BrowserPathname from 'react-browser-pathname';

import App from './App';
import Router from './Router';

const AppProviders = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserPathname>
      <Router>
        <App />
      </Router>
    </BrowserPathname>
  </Suspense>
);

export default AppProviders;
