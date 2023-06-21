const bestRatings = (array: any) => {
  if (!array || array.length === 0) {
    return null;
  }

  const content = [...array].sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
  );
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
