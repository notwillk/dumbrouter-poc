import React, { useContext, useCallback, useState } from 'react';

// Do all of the window events?....

const PathnameContext = React.createContext(null);
const UpdateContext = React.createContext(() => {});

const getPathname = () => `${window.location.pathname}`;

const WindowLocation = ({children}) => {
  const [location, setLocation] = useState(getPathname());

  const setCurrentWindowLocation = useCallback(() => {
    setLocation(getPathname());
  }, []);

  return (
    <UpdateContext.Provider value={setCurrentWindowLocation}>
      <PathnameContext.Provider value={location}>{children}</PathnameContext.Provider>
    </UpdateContext.Provider>
  );
};

export const useWindowLocationPathname = () => useContext(PathnameContext);

export const usePushPath = () => {
  const setCurrentWindowLocation = useContext(UpdateContext);

  return path => {
    window.history.pushState({}, null, path);
    setCurrentWindowLocation();
  };
};

export default WindowLocation;
