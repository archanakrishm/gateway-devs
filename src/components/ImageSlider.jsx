import React from 'react';
import Slider from 'react-slick';

import { GETAWAYVILLAS } from '../constants';
import prevNav from "../assets/images/prev.svg";
import nextNav from "../assets/images/next.svg";


const NextArrow = ({onClick}) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src={nextNav} className='w-[52px]' />
    </div>
  );
};

const PrevArrow = ({onClick}) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
            <img src={prevNav} />

    </div>
  );
};

const ImageSlider = () => {

  const [ImgIndex, setImgIndex] = React.useState(0);




  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    lazyLoad: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
    // autoplay: true,
    // autoplaySpeed: 3000,
    // arrows: true,
  };


  return (
    <div className="w-full mx-auto ">
      <Slider {...settings}>
        {GETAWAYVILLAS.map((villa, index) => (
          <div key={index} className={index === ImgIndex ? "slide activeSlide" : "slide"} >
            <img
              src={villa.img}
              alt={`Slide ${index + 1}`}
              className="w-full  object-cover rounded-[20px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
