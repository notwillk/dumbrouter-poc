import React, { Suspense } from 'react';
import WindowLocation from './WindowLocation';
import DumbRouter from './DumbRouter';
import App from './App';

const namedPaths = {
  page1: '/page1',
  page2: {
    path: '/page2',
    sensitive: true
  },
  page3: {
    path: '/page3/:id'
  },
};

const routes = [
  ['page1', { abc:123 }],
  ['page2', { abc:456 }],
  ['page3', { abc:789 }],
  ['/page4', { abc:0 }]
];

const notFound = {};

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
