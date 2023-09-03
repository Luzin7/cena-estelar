import ContentProps from '../types/data/IContent';

const isEmptyArray = (array: any[]) => !array || array.length === 0;

const bestRatings = (array: ContentProps[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  const newArray = array.filter((movie) => parseFloat(movie.rating) >= 4);

  return newArray.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
};

const lastSeens = (array: ContentProps[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  return array.sort((a, b) => b.id - a.id);
};

const getWishlist = (array: ContentProps[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  return array.sort((a, b) => b.id - a.id);
};

export { bestRatings, getWishlist, lastSeens };
