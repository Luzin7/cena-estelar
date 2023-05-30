const bestRatings = (array) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array].sort((a, b) => b.rating - a.rating);
  return content;
};

const lastSeens = (array) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array].sort((a, b) => b.id - a.id);
  return content;
};

const getWishlist = (array) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array.movies].sort((a, b) => b.id - a.id);
  return content;
};

export { bestRatings, lastSeens, getWishlist };
