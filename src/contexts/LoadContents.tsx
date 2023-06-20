import { createContext, useEffect, useState } from 'react';
import {
  getAllMovies,
  getAllSeries,
  getWishlist,
} from '../services/getContent';
import ProviderProp from '../interfaces/contexts/ContextsInterface';
import WishlistType from '../types/data/WishlistType';
import LoadContentsContextProps from '../interfaces/contexts/LoadContentInterface';
import WatchedContentType from '../types/data/ContentType';

export const ContentsContext = createContext<LoadContentsContextProps>({
  allMovies: null,
  setAllMovies: () => {},
  allSeries: null,
  setAllSeries: () => {},
  wishlist: null,
  setWishlist: () => {},
});

export const ContentsProvider = ({ children }: ProviderProp) => {
  const [allMovies, setAllMovies] = useState<WatchedContentType | null>(null);
  const [allSeries, setAllSeries] = useState<WatchedContentType | null>(null);

  const [wishlist, setWishlist] = useState<WishlistType | null>(null);

  const loadContents = async () => {
    const getMovies = getAllMovies();
    const getSeries = getAllSeries();
    const allWishlist = getWishlist();

    setAllMovies(getMovies);
    setAllSeries(getSeries);
    setWishlist(allWishlist);
  };

  const fetchContents = async () => {
    await loadContents();
  };

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentsContext.Provider
      value={{
        allMovies,
        setAllMovies,
        allSeries,
        setAllSeries,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </ContentsContext.Provider>
  );
};
