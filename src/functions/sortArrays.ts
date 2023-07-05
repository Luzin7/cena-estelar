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

const getWishlist = async (array: any) => {
  if (!array || array.length === 0) {
    return null;
  }

  const asd = await array;

  const content = [...asd].sort((a, b) => b - a);
  return content;
};

export { bestRatings, lastSeens, getWishlist };
