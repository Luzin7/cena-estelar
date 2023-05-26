import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../utils/paths';
import './css/content.css';

function Content() {
  return (
    <main className="root_main">
      <section className="root_sectionHeader">
        <h2>Transformando entretenimento em estudo.</h2>
        <p>
          Este projeto nasceu a partir das minhas experiências e opiniões, assim
          como das experiências dos meus amigos, sobre filmes, séries e todo
          tipo de conteúdo que assistimos juntos. Aqui você encontrará
          comentários, notas e, é claro, algumas opiniões duvidosas. Aproveite
          essa diversidade e explore nossa forma de entretenimento!
        </p>
        <Link to={HOME}>
          <button type="button">Ver conteúdo</button>
        </Link>
      </section>
      <section className="root_sectionAbout">
        <div className="about_title">
          <h2>Por que o projeto existe?</h2>
          <small>
            <q>
              Eu, como usuário não consigo interagir com o site, e isso me
              estressa! Como vou levar isso a sério? As críticas nem são
              profundas como a de um verdadeiro amante da cultura cult 😡🤬 -
              Você.
            </q>
          </small>
        </div>
        <p>
          Este projeto foi criado com o objetivo de tornar mais fácil a busca e
          o armazenamento de filmes, séries e outros conteúdos que eu assisto
          junto com meus amigos. Além de ser uma oportunidade para desenvolver
          minhas habilidades como programador, ele também resolve dois problemas
          que surgem quando assistimos algo em grupo: lembrar o que já vimos e
          decidir o que vamos assistir a seguir (e também evitar assistir algo
          ruim de novo).
        </p>
      </section>
    </main>
  );
}

export default Content;
