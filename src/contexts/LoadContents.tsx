import React, { createContext, useEffect, useState } from 'react';
import { getContents, getWishlist } from '../services/getContent';
import ProviderProp from '../interfaces/contexts/ContextsInterface';
import ContentType from '../types/data/ContentType';
import WishlistType from '../types/data/WishlistType';
import ContentProp from '../interfaces/data/ContentInterface';
import LoadContentsContextProps from '../interfaces/contexts/LoadContentInterface';

export const ContentsContext = createContext<LoadContentsContextProps>({
  contents: null,
  setContents: () => {},
  allMovies: null,
  setAllMovies: () => {},
  allSeries: null,
  setAllSeries: () => {},
  wishlist: null,
  setWishlist: () => {},
});

export const ContentsProvider = ({ children }: ProviderProp) => {
  const [contents, setContents] = useState<ContentType | null>(null);
  const [allMovies, setAllMovies] = useState<ContentProp[] | null>(null);
  const [allSeries, setAllSeries] = useState<ContentProp[] | null>(null);

  const [wishlist, setWishlist] = useState<WishlistType | null>(null);

  const loadContents = async () => {
    const allContents = getContents();
    const allWishlist = getWishlist();

    setContents(allContents);
    setWishlist(allWishlist);
  };

  const formatContents = () => {
    if (contents) {
      const { movies, series } = contents;
      setAllMovies(movies);
      setAllSeries(series);
    }
    if (!contents) {
      const allContents = getContents();

      const { movies, series } = allContents;
      setAllMovies(movies);
      setAllSeries(series);
    }
  };

  const fetchContents = async () => {
    await loadContents();
    formatContents();
  };

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentsContext.Provider
      value={{
        contents,
        setContents,
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
