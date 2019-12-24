import React from 'react';
import PojoRouter from 'pojo-router';
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

const Router = ({ children }) => (
  <PojoRouter namedPaths={namedPaths} routes={routes} notFound={notFound}>
    { children }
  </PojoRouter>
);

export default Router;
