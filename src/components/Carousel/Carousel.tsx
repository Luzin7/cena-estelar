import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselProps from '../../types/Swiper/ICarousel';

function Carousel({ title, movies, series, wishList }: CarouselProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const responsiveSlideView = (windowWidth: number) => {
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
          <Link to={`/movies/movie/${encodeURIComponent(name)}`}>
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
      <h2 className="section_title">{title}</h2>
      <Swiper
        slidesPerView={responsiveSlideView(windowWidth)}
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
