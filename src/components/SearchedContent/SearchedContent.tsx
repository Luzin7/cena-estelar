import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';
import { SearchContext } from '../../contexts/Search';
import FilteredSectionProp from '../../types/SearchedContent/IFilteredSection';
import './css/searchedContent.css';

function FilteredSection({ title, contents }: FilteredSectionProp) {
  const { setUserQuery } = useContext(SearchContext);
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

export function SearchedContent() {
  const { allMovies, allSeries } = useContext(ContentsContext);
  const { userQuery } = useContext(SearchContext);

  const movieFiltered = allMovies?.filter((movie) =>
    movie.name.toLowerCase().includes(userQuery.toLowerCase()),
  );
  const moviesFound = movieFiltered;
  const seriesFiltered = allSeries?.filter((serie) =>
    serie.name.toLowerCase().includes(userQuery.toLowerCase()),
  );
  const seriesFound = seriesFiltered;

  return (
    <main className="mainContainer" id={userQuery !== '' ? 'show' : ''}>
      {userQuery !== '' ? (
        <>
          <FilteredSection
            title={`Resultado de filmes (${moviesFound.length})`}
            contents={moviesFound}
          />
          <FilteredSection
            title={`Resultado de séries (${seriesFound.length})`}
            contents={seriesFound}
          />
        </>
      ) : (
        <>Digite algo e eu irei procurar!</>
      )}
    </main>
  );
}

