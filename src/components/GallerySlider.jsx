import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import prevNav from "../assets/images/prev.svg";
import nextNav from "../assets/images/next.svg";
import ImageZoomModal from "./ImageZoomModal";

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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [zoomSrc, setZoomSrc] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  // 🔹 Thumbnail slider - horizontal on mobile, vertical on desktop
  const thumbSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 2 : 3,
    slidesToScroll: 1,
    vertical: isDesktop,
    verticalSwiping: isDesktop,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className=" flex gap-[10px] md:gap-[17px] flex-col lg:flex-row">

  
      {/* 🔹 Main Slider */}
      <div className="main-slider flex-1">
        <Slider
          {...mainSettings}
          asNavFor={nav2}
          ref={sliderRef1}
          className="gallery-slider"
        >
          {images.map((item, index) => (
            <div key={index} className="">
              <img
                src={item.img || item}
                alt={item.title || `Image ${index + 1}`}
                onClick={() => setZoomSrc(item.img || item)}
                className="w-full h-[228px] md:h-[426px] object-cover rounded-[20px] cursor-zoom-in"
              />
            </div>
          ))}
        </Slider>
      </div>


          {/* 🔹 Thumbnails - Horizontal on mobile, Vertical on desktop */}
      <div className={`w-full ${isDesktop ? "lg:w-[368px]" : ""}`}>
        <Slider
          {...thumbSettings}
          asNavFor={nav1}
          ref={sliderRef2}
          className="gallery-slider-nav"
        >
          {images.map((item, index) => (
            <div key={index} className="px-2 cursor-pointer">
              <img
                src={item.img || item}
                alt={item.title || `Thumbnail ${index + 1}`}
                className={`w-full h-[108px] md:h-[202px] object-cover rounded-lg ${
                  index === imgIndex ? "border-2 border-blue-500" : ""
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <ImageZoomModal
        src={zoomSrc}
        isOpen={!!zoomSrc}
        onClose={() => setZoomSrc(null)}
      />
    </div>
  );
};

export default GallerySlider;