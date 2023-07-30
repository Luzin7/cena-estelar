import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import SectionProp from '../../interfaces/SearchedContent/FilteredSectionInterface';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

function Carousel({ title, contents }: SectionProp) {
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
        {contents.map(({ id, name, img }) => (
          <SwiperSlide className="item_carousel" key={id}>
            {id === 0 ? (
              <img src={img} alt={`front banner of ${name}`} />
            ) : (
              <Link to={`/movies/movie/${encodeURIComponent(name)}`}>
                <img src={img} alt={`front banner of ${name}`} />
              </Link>
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev prev-button"></div>
        <div className="swiper-button-next next-button"></div>
      </Swiper>
    </section>
  );
}

export default Carousel;
