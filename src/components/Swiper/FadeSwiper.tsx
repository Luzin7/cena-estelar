import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionProp from '../../interfaces/SearchedContent/FilteredSectionInterface';
import { Link } from 'react-router-dom';

export default function FadeSwiper({ contents }: SectionProp) {
  return (
    <section>
      <Swiper
        effect={'fade'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {contents.map(({ id, name, banner }) => (
          <SwiperSlide className="fade_swiper__item" key={id}>
            <div className="slider_img">
              <Link to={`/movies/movie/${id}`}>
                <img src={banner} alt={`front banner of ${name}`} />
              </Link>
              <div className="slider_bt__fade"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
