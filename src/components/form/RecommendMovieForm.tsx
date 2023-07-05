import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { wishlistRepository } from '../../services/repository';
import './css/recommendation.css';

export function RecommendMovieForm() {
  const [movieData, setMovieData] = useState({
    name: '',
    img: '',
  });

  const addContentToWishlist = async () => {
    const { name, img } = movieData;
    const content = await addDoc(wishlistRepository, { name, img });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <div className="form_wrapper">
        <label htmlFor="movieName">Nome do filme, série ou anime</label>
        <input
          type="text"
          id="movieName"
          placeholder="Adicione o filme, série ou anime..."
          value={movieData.name}
          onChange={({ target }) =>
            setMovieData({ ...movieData, name: target.value })
          }
          required
        />
        <label htmlFor="movieImg">Link da capa do filme, série ou anime</label>
        <input
          type="text"
          id="movieImg"
          placeholder="Adicione um link de imagem..."
          value={movieData.img}
          onChange={({ target }) =>
            setMovieData({ ...movieData, img: target.value })
          }
          required
        />
        <button type="submit" onClick={() => addContentToWishlist()}>
          Recomendar!
        </button>
      </div>
    </form>
  );
}
