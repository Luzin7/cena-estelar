import { addDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { wishlistRepository } from '../../services/repository';
import './css/recommendation.css';
import { UserDataContext } from '../../hooks/contexts/userData';

export function RecommendMovieForm() {
  const [movieData, setMovieData] = useState({
    name: '',
    img: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const { userData } = useContext(UserDataContext);

  const addContentToWishlist = async () => {
    const { name, img } = movieData;
    const imgLinkRegex = /\.(jpeg|jpg|png|webp)$/i;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (name === '' || img === '') {
      alert('Há campos vazios.');
      return;
    }
    if (!urlRegex.test(img)) {
      alert('Insira um link válido.');
      return;
    }
    if (!imgLinkRegex.test(img)) {
      alert(
        'Insira um link válido de uma imagem. Certifique de que sua imagem seja jpeg, jpg, png ou wepb.',
      );
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(wishlistRepository, { name, img });
      setMovieData({ ...movieData, name: '', img: '' });
      setIsSuccess(!isSuccess);
      setIsFailed(false);
    } catch (error) {
      setIsFailed(!isFailed);
      setIsSuccess(false);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <div className="form_wrapper">
        {isSuccess && (
          <>
            <h2 id="thanks_title">
              Agradecemos pela sua recomendação,{' '}
              {userData?.displayName ?? userData?.email}!
            </h2>
            <img
              src="https://3.bp.blogspot.com/-2RlLyzpA3No/Utp7fyHcNlI/AAAAAAAACfQ/w7_OBFzvrxU/s1600/he+2.gif"
              alt="he-man piscando o olho esquerdo para a camera"
              id="thanks_img"
            />
          </>
        )}
        {isFailed && (
          <>
            <h2 id="thanks_title">Oh não, algo deu errado! 😢</h2>
            <img
              src="https://media.tenor.com/KuJYgHddE4AAAAAM/spiderman-crying.gif"
              alt="spider-man chorando"
              id="thanks_img"
            />
            <span>
              Estamos trabalhando para resolver esse problema. Tente atualizar a
              página ou aguarde correções!
            </span>
          </>
        )}
        {!isSuccess && !isFailed && (
          <>
            <h3>
              Nos recomende algum filme, série ou anime que acha interessante!
              Basta seguir os passos abaixo.
            </h3>

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
            <label htmlFor="movieImg">
              Link da capa do filme, série ou anime
            </label>
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

            <button
              type="submit"
              onClick={() => addContentToWishlist()}
              disabled={isLoading ? true : false}
            >
              {isLoading ? '...' : 'Recomendar!'}
            </button>
            <small style={{ textAlign: 'center' }}>
              Sua recomendação será visível para todos na seção <i>Em breve</i>
            </small>
          </>
        )}
      </div>
    </form>
  );
}
