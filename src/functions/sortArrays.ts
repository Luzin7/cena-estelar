const bestRatings = (array: any) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array].filter((movie) => movie.rating > 4);
  return content;
};

const lastSeens = (array: any) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array].sort((a, b) => b.id - a.id);
  return content;
};

const getWishlist = (array: any) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array.movies].sort((a, b) => b.id - a.id);
  return content;
};

export { bestRatings, lastSeens, getWishlist };
