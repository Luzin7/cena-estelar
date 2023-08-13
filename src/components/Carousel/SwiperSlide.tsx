import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ViewPortContext } from '../../contexts/ViewPort';
import CarouselProps from '../../types/Swiper/ICarousel';

function Carousel({ title, movies, series, wishList }: CarouselProps) {
  const { windowWidth } = useContext(ViewPortContext);

  const calculateColumns = (windowWidth: number) => {
    const mobileM = 375;
    const tablet = 768;
    const laptop = 1024;
    const laptopL = 1440;
    const desktop = 1920;

    if (windowWidth < mobileM) {
      return 3;
    } else if (windowWidth >= mobileM && windowWidth < tablet) {
      return 3;
    } else if (windowWidth >= tablet && windowWidth < laptop) {
      return 2;
    } else if (windowWidth >= laptop && windowWidth < laptopL) {
      return 4;
    } else if (windowWidth >= laptopL && windowWidth < desktop) {
      return 4;
    } else {
      return 6;
    }
  };

  const carouselContent = () => {
    if (movies) {
      return movies.map(({ id, name, img }) => (
        <SwiperSlide className="item_carousel" key={id}>
          <Link to={`/movie/${encodeURIComponent(name)}`}>
            <img src={img} alt={`front banner of ${name}`} loading="lazy" />
          </Link>
        </SwiperSlide>
      ));
    } else if (series) {
      return series.map(({ id, name, img }) => (
        <SwiperSlide className="item_carousel" key={id}>
          <img src={img} alt={`front banner of ${name}`} loading="lazy" />
        </SwiperSlide>
      ));
    } else if (wishList) {
      return wishList.map(({ id, name, img }) => (
        <SwiperSlide className="item_carousel" key={id}>
          <img src={img} alt={`front banner of ${name}`} loading="lazy" />
        </SwiperSlide>
      ));
    }
  };

  return (
    <section className="categoriesSection">
      <h2 className="section_title opacity-70 font-medium text-2xl mb-[2vh]">
        {title}
      </h2>
      <Swiper
        slidesPerView={calculateColumns(windowWidth)}
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
      >
        {carouselContent()}
        <div className="swiper-button-prev prev-button"></div>
        <div className="swiper-button-next next-button"></div>
      </Swiper>
    </section>
  );
}

export default Carousel;
