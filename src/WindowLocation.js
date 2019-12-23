import React, { useContext, useCallback, useEffect, useState } from 'react';

const PathnameContext = React.createContext(null);
const UpdateContext = React.createContext(() => {});

const getPathname = () => `${window.location.pathname}`;

const WindowLocation = ({children}) => {
  const [location, setLocation] = useState(getPathname());

  const setCurrentWindowLocation = useCallback(() => {
    setLocation(getPathname());
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', setCurrentWindowLocation);

    return () => {
      window.removeEventListener('popstate', setCurrentWindowLocation);
    };
  }, [setCurrentWindowLocation]);

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
