import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { getContents, getWishlist } from '../services/getContent';

export const ContentsContext = createContext();

export const ContentsProvider = ({ children }) => {
  const [contents, setContents] = useState(null);
  const [allMovies, setAllMovies] = useState(null);
  const [allSeries, setAllSeries] = useState(null);
  const [allAnimes, setAllAnimes] = useState(null);
  const [allContentsTypes, setAllContentsTypes] = useState(null);
  const [wishlist, setWishlist] = useState(null);

  const loadContents = async () => {
    const allContents = getContents();
    const allWishlist = getWishlist();

    setContents(allContents);
    setWishlist(allWishlist);
  };

  const formatContents = () => {
    if (contents) {
      const { movies, series, animes } = contents;
      setAllMovies(movies);
      setAllSeries(series);
      setAllAnimes(animes);
      setAllContentsTypes(movies, series, animes);
    }
    if (!contents) {
      const allContents = getContents();

      const { movies, series, animes } = allContents;
      setAllMovies(movies);
      setAllSeries(series);
      setAllAnimes(animes);
      setAllContentsTypes(movies, series, animes);
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
        allAnimes,
        setAllAnimes,
        wishlist,
        setWishlist,
        allContentsTypes,
        setAllContentsTypes,
      }}
    >
      {children}
    </ContentsContext.Provider>
  );
};

ContentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
