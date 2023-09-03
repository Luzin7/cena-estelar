import { createContext, useEffect, useState } from 'react';
import {
  getAllMovies,
  getAllSeries,
  getWishlist,
} from '../services/getContent';
import ProviderProp from '../types/contexts/IContexts';
import LoadContentsContextProps from '../types/contexts/ILoadContent';
import ContentProps from '../types/data/IContent';
import WishlistProps from '../types/data/IWishlist';

export const ContentsContext = createContext<LoadContentsContextProps>({
  allMovies: [],
  setAllMovies: () => {},
  allSeries: [],
  setAllSeries: () => {},
  wishlist: [],
  setWishlist: () => {},
});

export const ContentsProvider = ({ children }: ProviderProp) => {
  const [allMovies, setAllMovies] = useState<ContentProps[]>([]);
  const [allSeries, setAllSeries] = useState<ContentProps[]>([]);

  const [wishlist, setWishlist] = useState<WishlistProps[]>([]);

  const loadContents = async () => {
    const getMovies = await getAllMovies();
    const getSeries = getAllSeries();
    const allWishlist = await getWishlist();

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
