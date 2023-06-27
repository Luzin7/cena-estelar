import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionProp from '../../interfaces/SearchedContent/FilteredSectionInterface';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper';

function Carousel({ title, contents }: SectionProp) {
  const windowWidth = window.innerWidth;

  return (
    <section className="categoriesSection">
      <h2 className="section_title">{title}</h2>
      <Swiper
        slidesPerView={windowWidth <= 600 ? 3 : 6}
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode]}
      >
        {contents.map(({ id, name, img }) => (
          <SwiperSlide className="item_carousel" key={id}>
            {id === 0 ? (
              <img src={img} alt={`front banner of ${name}`} />
            ) : (
              <Link to={`/movies/movie/${id}`}>
                <img src={img} alt={`front banner of ${name}`} />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Carousel;
