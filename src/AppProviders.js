import React, { Suspense } from 'react';
import WindowLocation from './WindowLocation';
import DumbRouter from './DumbRouter';
import App from './App';
import * as namedPaths from './routes';

const routes = [
  ['page1', { abc:123 }],
  ['page2', { abc:456 }],
  ['page3', { abc:789 }],
  ['/page4', { abc:0 }]
];

const notFound = { nothing: true };

const AppProviders = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <WindowLocation>
      <DumbRouter namedPaths={namedPaths} routes={routes} notFound={notFound}>
        <App />
      </DumbRouter>
    </WindowLocation>
  </Suspense>
);

export default AppProviders;
