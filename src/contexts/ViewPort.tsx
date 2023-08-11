import { createContext, useEffect, useState } from 'react';
import ProviderProp from '../types/contexts/IContexts';
import ViewPortContextProps from '../types/contexts/IViewPort';

const initialViewPort = window.innerWidth;

export const ViewPortContext = createContext<ViewPortContextProps>({
  windowWidth: initialViewPort,
  setWindowWidth: () => {},
});

export const ViewPortProvider = ({ children }: ProviderProp) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ViewPortContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </ViewPortContext.Provider>
  );
};
