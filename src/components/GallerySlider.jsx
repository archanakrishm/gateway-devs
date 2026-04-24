import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import prevNav from "../assets/images/prev.svg";
import nextNav from "../assets/images/next.svg";

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <img src={nextNav} className="w-[52px]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
    <img src={prevNav} className="w-[52px]" />
  </div>
);

const GallerySlider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  // 🔹 Main slider
  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    beforeChange: (current, next) => setImgIndex(next),
  };

  // 🔹 Thumbnail vertical slider
  const thumbSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,              // ✅ IMPORTANT
    verticalSwiping: true,       // ✅ IMPORTANT
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className=" flex gap-6 flex-col lg:flex-row">

  
      {/* 🔹 Main Slider */}
      <div className="main-slider">
        <Slider
          {...mainSettings}
          asNavFor={nav2}
          ref={sliderRef1}
          className="gallery-slider"
        >
          {images.map((item, index) => (
            <div key={index} className="p-[10px]">
              <img
                src={item.img || item}
                alt={item.title || `Image ${index + 1}`}
                className="w-full h-[426px] object-cover rounded-[20px]"
              />
            </div>
          ))}
        </Slider>
      </div>


          {/* 🔹 Vertical Thumbnails */}
      <div className="w-full lg:w-[368px]">
        <Slider
          {...thumbSettings}
          asNavFor={nav1}
          ref={sliderRef2}
          className="gallery-slider-nav"
        >
          {images.map((item, index) => (
            <div key={index} className="p-2 cursor-pointer">
              <img
                src={item.img || item}
                alt={item.title || `Thumbnail ${index + 1}`}
                className={`w-full h-[202px] object-cover rounded-lg ${
                  index === imgIndex ? "border-2 border-blue-500" : ""
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default GallerySlider;