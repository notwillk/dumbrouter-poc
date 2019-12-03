import React, { Suspense } from 'react';
import WindowLocation from './WindowLocation';
import App from './App';
import Router from './Router';

const AppProviders = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <WindowLocation>
      <Router>
        <App />
      </Router>
    </WindowLocation>
  </Suspense>
);

export default AppProviders;
