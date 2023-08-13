import { addDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../contexts/userData';
import { wishlistRepository } from '../../services/repository';
import './css/recommendation.css';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaRecommendForm = z.object({
  recommendation: z.object({
    name: z.string().min(1, 'Por favor, insira o titulo do conteúdo'),
    img: z.string().min(1, 'Por favor, insira um link de imagem do conteúdo'),
    contentType: z.string().min(1, 'Por favor, selecione um tipo de conteúdo'),
  }),
});

type formProps = z.infer<typeof schemaRecommendForm>;

export function RecommendMovieForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const { userData } = useContext(UserDataContext);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<formProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaRecommendForm),
    defaultValues: {
      recommendation: {
        name: '',
        img: '',
      },
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  const handleFormSubmit = async ({ recommendation }: formProps) => {
    const { name, img, contentType } = recommendation;
    const whoRecommend = {
      name: userData?.displayName,
      email: userData?.email,
      profilePhoto: userData?.photoURL,
    };

    const imgLinkRegex = /\.(jpeg|jpg|png|webp)$/i;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!urlRegex.test(img)) {
      alert('Insira um link válido.');
      return;
    } else if (!imgLinkRegex.test(img)) {
      alert(
        'Insira um link válido de uma imagem. Certifique de que sua imagem seja: jpeg, jpg, png ou wepb.',
      );
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(wishlistRepository, {
        name,
        img,
        contentType,
        whoRecommend,
      });
      setIsSuccess(!isSuccess);
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="container flex justify-center items-center m-auto">
      <div className="form_wrapper w-full md:w-4/5 lg:w-3/4">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="form rounded-lg flex flex-col flex-wrap justify-center items-center p-8 gap-4"
        >
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
          {isSuccess === false && (
            <>
              <h2 id="thanks_title">Oh não, algo deu errado! 😢</h2>
              <img
                src="https://media.tenor.com/KuJYgHddE4AAAAAM/spiderman-crying.gif"
                alt="spider-man chorando"
                id="thanks_img"
              />
              <span>
                Estamos trabalhando para resolver esse problema. Tente atualizar
                a página ou aguarde correções!
              </span>
            </>
          )}
          <h3 className="text-4xl font-bold mb-7">
            Nos recomende algum conteúdo interessante!
          </h3>

          <label className="self-start" htmlFor="movieName">
            Nome do conteúdo
          </label>
          <input
            className="w-full p-4 outline-none rounded-lg text-base placeholder:opacity-50"
            type="text"
            id="movieName"
            {...register('recommendation.name')}
            placeholder="Nome do conteúdo..."
          />
          {errors.recommendation?.name?.message && (
            <span className="text-red-400">
              {errors.recommendation?.name?.message}
            </span>
          )}
          <label className="self-start" htmlFor="movieImg">
            Url da imagem do conteúdo
          </label>
          <input
            className="w-full p-4 outline-none rounded-lg text-base placeholder:opacity-50"
            type="text"
            id="movieImg"
            {...register('recommendation.img')}
            placeholder="Adicione uma url de imagem..."
          />
          {errors.recommendation?.img?.message && (
            <span className="text-red-400">
              {errors.recommendation?.img?.message}
            </span>
          )}
          <div className="flex flex-col xl:flex-row items-center self-start gap-4">
            <label className="self-start" htmlFor="contentType">
              Que tipo de conteúdo é esse?
            </label>
            <Controller
              name="recommendation.contentType"
              control={control}
              defaultValue=""
              rules={{ required: 'Por favor, selecione um tipo de conteúdo' }}
              render={({ field }) => (
                <select {...field}>
                  <option value="" disabled hidden>
                    Selecione um tipo de conteúdo
                  </option>
                  <option value="filme">Filme</option>
                  <option value="série">Série</option>
                  <option value="documentário">Documentário</option>
                </select>
              )}
            />
            {errors.recommendation?.contentType?.message && (
              <span className="text-red-400">
                {errors.recommendation?.contentType?.message}
              </span>
            )}
          </div>
          <button
            className="py-3 w-full font-semibold text-lg mt-7"
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? '...' : 'Recomendar!'}
          </button>
          <small>
            Sua recomendação será visível para todos na seção <i>Em breve</i>
          </small>
        </form>
      </div>
    </div>
  );
}
