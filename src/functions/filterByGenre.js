const filterMoviesByGenre = (array, genre) => {
  if (array) {
    const contentFiltered = array.filter((content) =>
      content.genres.includes(genre),
    );

    return contentFiltered;
  }

  return null;
};

export default filterMoviesByGenre;
