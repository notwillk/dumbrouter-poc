import React from 'react';
import { useWindowLocationPathname } from './WindowLocation';
import { useFirstMatch } from './DumbRouter';

const PageComponent = () => {
  const pathname = useWindowLocationPathname();
  const { abc, id } = useFirstMatch(pathname);

  return (
    <ol>
      <li>This is an awesome page</li>
      <li>abc={abc}</li>
      <li>id={id}</li>
    </ol>
  );
};

export default PageComponent;
