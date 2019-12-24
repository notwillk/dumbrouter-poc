import React from 'react';
import { useCurrentMatch } from 'pojo-router';

const FallbackComponent = () => {
  const value = useCurrentMatch();

  return <pre>{ JSON.stringify(value, null, '  ') }</pre>;
};

export default FallbackComponent;
