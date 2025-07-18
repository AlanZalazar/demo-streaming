// Home.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carrusel() {
  const images = [
    "./1.home/2.png",
    "./1.home/3.png",
    "./1.home/4.png",
    "./1.home/5.png",
    "./1.home/7.png",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-[100px] h-auto object-contain rounded-lg mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
