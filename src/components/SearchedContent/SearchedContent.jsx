import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';
import { SearchContext } from '../../contexts/Search';
import './css/searchedContent.css';

function FilteredSection({ title, contents }) {
  const { setUserQuery, setSearchIsActive } = useContext(SearchContext);
  return (
    <section className="categoriesSection">
      <h2 className="section_title">{title}</h2>
      <div className="searched_content_wrapper">
        {contents.map(({ id, name, img }) => (
          <div className="item_searched" key={id}>
            {id === 0 ? (
              <img src={img} alt={`front banner of ${name}`} />
            ) : (
              <Link
                to={`/movies/movie/${id}`}
                onClick={() => {
                  setUserQuery('');
                  setSearchIsActive(false);
                }}
              >
                <img src={img} alt={`front banner of ${name}`} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

FilteredSection.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function SearchedContent() {
  const { allMovies, allSeries } = useContext(ContentsContext);
  const { userQuery } = useContext(SearchContext);
  const movieFiltered = allMovies.filter((movie) =>
    movie.name.toLowerCase().includes(userQuery.toLowerCase()),
  );
  const seriesFiltered = allSeries.filter((serie) =>
    serie.name.toLowerCase().includes(userQuery.toLowerCase()),
  );

  return (
    <main className="mainContainer" id={userQuery !== '' ? 'show' : ''}>
      {userQuery !== '' ? (
        <>
          <FilteredSection
            title={`Resultado de filmes (${movieFiltered.length})`}
            contents={movieFiltered}
          />
          <FilteredSection
            title={`Resultado de séries (${seriesFiltered.length})`}
            contents={seriesFiltered}
          />
        </>
      ) : (
        <>
          <h1>eitacarai</h1>
        </>
      )}
    </main>
  );
}

export default SearchedContent;
