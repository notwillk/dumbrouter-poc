import React from 'react';
import { useBrowserPathname } from 'react-browser-pathname';
import { useCurrentPath, useCurrentMatch } from 'pojo-router';
import Navigation from './Navigation';
import FallbackComponent from './FallbackComponent';

const App = () => {
  const pathname = useBrowserPathname();
  useCurrentPath(pathname);

  const { Component } = useCurrentMatch();

  return (
    <div>
      <Navigation />
      { Component ? <Component /> : <FallbackComponent /> }
    </div>
  );
}

export default App;
