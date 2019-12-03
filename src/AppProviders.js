import React, { Suspense } from 'react';
import WindowLocation from './WindowLocation';
import DumbRouter from './DumbRouter';
import App from './App';
import * as namedPaths from './routes';
import PageComponent from './PageComponent';
import OtherComponent from './OtherComponent';

const routes = [
  ['page1', { abc:123, Component: PageComponent }],
  ['page2', { abc:456 }],
  ['page3', { abc:789, Component: PageComponent }],
  ['/page4', { abc:0, Component: OtherComponent }]
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
