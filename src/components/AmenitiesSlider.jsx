import React from 'react';
import Slider from 'react-slick';
import prevNav from "../assets/images/prev.svg";
import nextNav from "../assets/images/next.svg";
import ImageZoomModal from "./ImageZoomModal";

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next"
    onClick={onClick}
    className="amenities-arrow amenities-arrow-next"
  >
    <img src={nextNav} alt="" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous"
    onClick={onClick}
    className="amenities-arrow amenities-arrow-prev"
  >
    <img src={prevNav} alt="" />
  </button>
);

const AmenitiesSlider = ({ amenities }) => {
  const [ImgIndex, setImgIndex] = React.useState(0);
  const [zoomSrc, setZoomSrc] = React.useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="amenities-slider">
        {amenities.map((item, index) => (
          <div key={index} className={index === ImgIndex ? "slideItem activeSlideItem  p-[10px]" : "slideItem  p-[10px]"}>
            <img
              src={item.img}
              alt={`Amenity ${index + 1}`}
              onClick={() => setZoomSrc(item.img)}
              className="w-full min-h-[300px] object-cover rounded-[20px] cursor-zoom-in"
            />
          </div>
        ))}
      </Slider>
      <ImageZoomModal
        src={zoomSrc}
        alt=""
        isOpen={!!zoomSrc}
        onClose={() => setZoomSrc(null)}
      />
    </div>
  );
};

export default AmenitiesSlider;