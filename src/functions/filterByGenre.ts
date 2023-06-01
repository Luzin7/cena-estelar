const filterMoviesByGenre = (array: any, genre: string) => {
  if (array) {
    const contentFiltered = array.filter((content: any) =>
      content.genres.includes(genre),
    );

    return contentFiltered;
  }

  return null;
};

export default filterMoviesByGenre;
