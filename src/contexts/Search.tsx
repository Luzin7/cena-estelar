import { createContext, useState } from 'react';
import ProviderProp from '../types/contexts/IContexts';
import SearchContextProps from '../types/contexts/ISearchContext';

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
