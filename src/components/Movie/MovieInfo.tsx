import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  TiStarOutline,
  TiStarHalfOutline,
  TiStarFullOutline,
} from 'react-icons/ti';
import { ContentsContext } from '../../contexts/LoadContents';
import './css/movieInfo.css';

function MovieInfo() {
  const { allMovies } = useContext(ContentsContext);
  const { id } = useParams();
  const movieInfo = allMovies?.movies?.find(
    (movie) => movie.id === parseInt(id ? id : 'no-found'),
  );

  const name = movieInfo?.name ?? '';
  const description = movieInfo?.description ?? '';
  const longDescription = movieInfo?.longDescription ?? '';
  const rating = movieInfo?.rating ?? '';
  const media = movieInfo?.media ?? '';
  const genres = movieInfo?.genres ?? [];

  const showGenre = () => {
    if (genres.length === 1) {
      return <span className="genres">Gênero: {genres}</span>;
    }
    if (genres.length > 1) {
      const formattedGenres = `${genres
        .slice(0, -1)
        .join(', ')} e ${genres.slice(-1)}`;
      return <span className="genres">Gêneros: {formattedGenres}</span>;
    }

    return null;
  };

  const showRating = () => {
    const contentRating = parseFloat(rating);
    const stars = [];

    for (let i = 1; i <= 5; i += 1) {
      if (contentRating >= i) {
        stars.push(<TiStarFullOutline key={i} id="fullStar" />);
      } else if (contentRating + 0.5 >= i) {
        stars.push(<TiStarHalfOutline key={i} id="halfStar" />);
      } else {
        stars.push(<TiStarOutline key={i} id="emptyStar" />);
      }
    }

    return (
      <div className="content_rating">
        <span className="stars">{stars}</span>
        <span className="rating">{rating}</span>
      </div>
    );
  };

  const recommendMoviesByGenre = () => {
    const genre = () => {
      const getRandomGenreByMovie =
        genres[Math.floor(Math.random() * genres.length)];
      return getRandomGenreByMovie;
    };

    if (allMovies) {
      const recommendedMovies = allMovies.movies
        ?.filter((movie) => movie.genres.includes(genre()))
        .slice(0, 6);

      return recommendedMovies?.map((movie) => (
        <Link to={`/movies/movie/${movie.id}`} key={movie.id}>
          <img src={movie.img} alt={`front banner of ${movie.name}`} />
        </Link>
      ));
    }

    return null;
  };

  return (
    <main className="mainContainer content">
      <div className="overview_container">
        <section className="content_overview">
          <div className="content_summary">
            <div className="content_thumbnail">
              <figure>
                <img src={media} alt={name} />
              </figure>
              <figcaption>{name}</figcaption>
              <div className="summary_side">
                <div className="content_infos">{showGenre()}</div>
                <div className="content_rating">{showRating()}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="content_review">
          <div className="review_title__wrap">
            <h2>{name}</h2>
            <small>
              <q>{description}</q>
            </small>
          </div>
          <p>{longDescription}</p>
        </section>
      </div>
      <aside className="recommendation">
        <h2>Filmes relacionados</h2>
        <div className="recommended">{recommendMoviesByGenre()}</div>
      </aside>
    </main>
  );
}
export default MovieInfo;
