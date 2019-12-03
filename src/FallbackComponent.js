import React from 'react';
import { useWindowLocationPathname } from './WindowLocation';
import { useFirstMatch } from './DumbRouter';

const FallbackComponent = () => {
  const pathname = useWindowLocationPathname();
  const value = useFirstMatch(pathname);

  return <pre>{ JSON.stringify(value, null, '  ') }</pre>;
};

export default FallbackComponent;
