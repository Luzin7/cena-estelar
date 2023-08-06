import ContentProps from '../types/data/IContent';

const filterMoviesByGenre = (array: ContentProps[], genre: string) => {
  if (array) {
    const contentFiltered = array.filter((content: ContentProps) =>
      content.genres.includes(genre),
    );

    return contentFiltered;
  }

  return null;
};

export default filterMoviesByGenre;
