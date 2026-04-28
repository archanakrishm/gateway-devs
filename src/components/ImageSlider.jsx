import React from 'react';
import Slider from 'react-slick';

import { GETAWAYVILLAS } from '../constants';
import ImageZoomModal from './ImageZoomModal';

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next slide"
    onClick={onClick}
    className="slick-arrow slick-next home-nav-btn"
  >
    <span className="home-nav-icon home-nav-icon-right" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous slide"
    onClick={onClick}
    className="slick-arrow slick-prev home-nav-btn"
  >
    <span className="home-nav-icon home-nav-icon-left" />
  </button>
);

const ImageSlider = () => {

  const [ImgIndex, setImgIndex] = React.useState(0);
  const [zoomSrc, setZoomSrc] = React.useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    lazyLoad: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      const total = GETAWAYVILLAS.length;
      // Normalize to handle infinite/cloned slide indices (can be negative or >= total)
      const normalized = ((next % total) + total) % total;
      setImgIndex(normalized);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto home-slider-wrap">
      <Slider {...settings} className="home-slider">
        {GETAWAYVILLAS.map((villa, index) => {
          const total = GETAWAYVILLAS.length;
          const isActive = index === ImgIndex;
          const isPrev = index === (ImgIndex - 1 + total) % total;
          const isNext = index === (ImgIndex + 1) % total;
          const slideClass = [
            'slide',
            isActive && 'activeSlide',
            isPrev && 'prevSlide',
            isNext && 'nextSlide',
          ]
            .filter(Boolean)
            .join(' ');
          return (
            <div key={index} className={slideClass}>
              <img
                src={villa.img}
                alt={`Slide ${index + 1}`}
                onClick={() => isActive && setZoomSrc(villa.img)}
                className="w-full object-cover rounded-[20px] cursor-zoom-in"
              />
            </div>
          );
        })}
      </Slider>
      <ImageZoomModal
        src={zoomSrc}
        alt="Villa"
        isOpen={!!zoomSrc}
        onClose={() => setZoomSrc(null)}
      />
    </div>
  );
};

export default ImageSlider;
