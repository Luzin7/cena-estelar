import React, { createContext, useState } from 'react';
import ProviderProp from '../../interfaces/contexts/ContextsInterface';
import SearchContextProps from '../../interfaces/contexts/SearchContextInterface';

export const SearchContext = createContext<SearchContextProps>({
  userQuery: '',
  setUserQuery: () => {},
});

export const SearchProvider = ({ children }: ProviderProp) => {
  const [userQuery, setUserQuery] = useState('');

  return (
    <SearchContext.Provider value={{ userQuery, setUserQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
