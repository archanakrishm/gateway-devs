import React from 'react';
import Slider from 'react-slick';
import prevNav from "../assets/images/prev.svg";
import nextNav from "../assets/images/next.svg";

const NextArrow = ({onClick}) => {
  return (
    <div className="slick-arrow slick-nexts" onClick={onClick}>
      <img src={nextNav} className='w-[52px]' />
    </div>
  );
};

const PrevArrow = ({onClick}) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src={prevNav} className='w-[52px]' />
    </div>
  );
};

const AmenitiesSlider = ({ amenities }) => {
  const [ImgIndex, setImgIndex] = React.useState(0);

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
              className="w-full min-h-[300px] object-cover rounded-[20px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AmenitiesSlider;