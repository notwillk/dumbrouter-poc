import React from 'react';
import { useCurrentMatch } from 'pojo-router';

const PageComponent = () => {
  const { abc, id } = useCurrentMatch();

  return (
    <ol>
      <li>This is an awesome page</li>
      <li>abc={abc}</li>
      <li>id={id}</li>
    </ol>
  );
};

export default PageComponent;
