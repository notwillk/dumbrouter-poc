import React from 'react';
import { usePushPath } from 'react-browser-pathname';
import { useOutboundRoute } from 'pojo-router';

const Navigation = () => {
  const pushPath = usePushPath();

  const link1 = useOutboundRoute('page1');
  const link2 = useOutboundRoute('page2');
  const link3 = useOutboundRoute('page3');
  const link4 = useOutboundRoute('/page4');

  return (
    <ul>
      <li><button onClick={() => pushPath(link1())}>page 1</button></li>
      <li><button onClick={() => pushPath(link2())}>page 2</button></li>
      <li><button onClick={() => pushPath(link3({ id: 12345 }))}>page 3</button></li>
      <li><button onClick={() => pushPath(link4())}>page 4</button></li>
      <li><button onClick={() => pushPath("/gibberish")}>unknown</button></li>
    </ul>
  );
}

export default Navigation;
