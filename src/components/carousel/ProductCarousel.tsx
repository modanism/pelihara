import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";
import ProductCard from "../cards/ProductCard";

function ProductCarousel() {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </div>
  );
}
export default ProductCarousel;
