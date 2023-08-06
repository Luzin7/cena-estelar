import ContentProp from '../interfaces/data/ContentInterface';

const isEmptyArray = (array: any[]) => !array || array.length === 0;

const bestRatings = (array: ContentProp[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  const newArray = array.filter((movie) => parseFloat(movie.rating) >= 4);

  return newArray.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
};

const lastSeens = (array: ContentProp[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  return array.sort((a, b) => b.id - a.id);
};

const getWishlist = (array: ContentProp[]) => {
  if (isEmptyArray(array)) {
    return null;
  }

  return array.sort((a, b) => b.id - a.id);
};

export { bestRatings, getWishlist, lastSeens };
