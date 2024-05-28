import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";
import StoreCard from "../cards/StoreCard";

function StoreCarousel() {
  let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </Slider>
    </div>
  );
}
export default StoreCarousel;
