import React, { createContext, useState } from 'react';
import ProviderProp from '../../interfaces/contexts/ContextsInterface';
import SearchContextProps from '../../interfaces/contexts/SearchContextInterface';

export const SearchContext = createContext<SearchContextProps>({
  searchIsActive: false,
  setSearchIsActive: () => {},
  userQuery: '',
  setUserQuery: () => {},
});

export const SearchProvider = ({ children }: ProviderProp) => {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  return (
    <SearchContext.Provider
      value={{ searchIsActive, setSearchIsActive, userQuery, setUserQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
};
