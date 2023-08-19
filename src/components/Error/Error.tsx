import { Link } from 'react-router-dom';
import { HOME } from '../../utils/paths';

export function ErrorPage() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold border-b-2 rounded-full border-accent">
        404
      </h1>
      <p className="text-xl mt-7">Você foi além do que pudemos avaliar.</p>
      <Link to={HOME}>
        <button className="bg-primary p-4 font-bold mt-7">
          Voltar para página inicial
        </button>
      </Link>
    </div>
  );
}
