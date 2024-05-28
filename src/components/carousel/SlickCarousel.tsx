import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";
import PromoImg from "@/assets/images/promo.png";
import Image from "next/image";

function SlickCarousel() {
  let sliderRef = useRef<Slider | null>(null);
  const sliderElement = sliderRef.current;
  if (sliderElement) {
    sliderElement.slickPlay();
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
        <div>
          <Image src={PromoImg} alt="Promo poster" className="m-auto" />
        </div>
      </Slider>
    </div>
  );
}
export default SlickCarousel;
