import { useContext, useEffect, useState } from 'react';
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';
import { ContentsContext } from '../../contexts/LoadContents';
import Loading from '../Loading';
import './css/movieInfo.css';

function MovieInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const { allMovies } = useContext(ContentsContext);
  const { id } = useParams();
  const movieInfo = allMovies?.find((movie) => movie.name === id);

  const {
    name = '',
    description = '',
    longDescription = '',
    rating = '',
    media = '',
    genres = [],
    originalTitle = '',
  } = movieInfo || {};

  useEffect(() => {
    setIsLoading(true);
    const image = new Image();
    image.src = media;
    image.onload = () => {
      setIsLoading(false);
    };

    return () => {
      image.onload = null;
    };
  }, [media]);

  const showGenre = () => {
    if (genres.length === 1) {
      return <span className="genres">Gênero: {genres[0]}</span>;
    } else if (genres.length > 1) {
      const formattedGenres =
        genres.slice(0, -1).join(', ') + ' e ' + genres.slice(-1);
      return <span className="genres">Gêneros: {formattedGenres}</span>;
    }
    return null;
  };

  const showRating = () => {
    const contentRating = parseFloat(rating);
    const stars = Array.from({ length: 5 }, (_, index) => {
      if (contentRating >= index + 1) {
        return <TiStarFullOutline key={index} id="fullStar" />;
      } else if (contentRating + 0.5 >= index + 1) {
        return <TiStarHalfOutline key={index} id="halfStar" />;
      } else {
        return <TiStarOutline key={index} id="emptyStar" />;
      }
    });

    return (
      <div className="content_rating">
        <span className="stars">{stars}</span>
        <span className="rating">{rating}</span>
      </div>
    );
  };

  const recommendMoviesByGenre = () => {
    const selectedGenre = genres[Math.floor(Math.random() * genres.length)];

    const recommendedMovies = allMovies
      .filter((movie) => movie.genres.includes(selectedGenre))
      .filter((movie) => movie.name !== name)
      .slice(0, 6);

    if (recommendedMovies && recommendedMovies.length > 0) {
      return recommendedMovies.map((movie) => (
        <Link to={`/movie/${encodeURIComponent(movie.name)}`} key={movie.id}>
          <img src={movie.img} alt={`front banner of ${movie.name}`} />
        </Link>
      ));
    } else {
      return (
        <p>
          Parece que não foi encontrado nenhum filme baseado na categoria.
          Pedimos desculpas por isso.
        </p>
      );
    }
  };

  return (
    <main className="mainContainer content">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="overview_container">
            <section className="content_overview">
              <div className="content_summary">
                <div className="content_thumbnail">
                  <figure>
                    <img src={media} alt={name} />
                  </figure>
                  <figcaption>{originalTitle}</figcaption>
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
            <h2>Veja também</h2>
            <div className="recommended">{recommendMoviesByGenre()}</div>
          </aside>
        </>
      )}
    </main>
  );
}
export default MovieInfo;
