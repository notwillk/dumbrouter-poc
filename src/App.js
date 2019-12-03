import React from 'react';
import { useWindowLocationPathname } from './WindowLocation';
import { useFirstMatch } from './DumbRouter';
import Navigation from './Navigation';
import FallbackComponent from './FallbackComponent';

const App = () => {
  const pathname = useWindowLocationPathname();
  const { Component } = useFirstMatch(pathname);

  return (
    <div>
      <Navigation />
      { Component ? <Component /> : <FallbackComponent /> }
    </div>
  );
}

export default App;
