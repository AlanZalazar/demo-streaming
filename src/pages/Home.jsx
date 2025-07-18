import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Carrusel from "../components/Carrusel";

export default function Home() {
  return (
    <div className="h-[100dvh] w-[100%]">
      <div className="md:px-5 lg:px-[15%] h-[50%] md:h-[60%] w-[100%] flex relative overflow-hidden z-10">
        <div className="gap-3  text-center justify-center items-center md:items-baseline flex flex-col md:max-w-[300px] relative z-20">
          <h1
            className="font-bold text-3xl"
            style={{
              background:
                "linear-gradient(112.77deg, #C381DB 0%, #4E92F9 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tailwind CSS theme
          </h1>
          <h2 className="font-semibold text-2xl">
            crafted with <span className="font-bold">React + Vite</span>
          </h2>
          <p className="text-[11px] font-semibold text-gray-500">
            This design is powered by Tailwind CSS, the utility-first framework
            for rapid UI development, combined with the speed of React and Vite.
          </p>
          <button
            className="botonacio m-2 mt-6 font-bold text-white w-[100px] text-xs p-2 rounded-lg relative z-30"
            style={{
              background:
                "linear-gradient(112.77deg, #C381DB 0%, #4E92F9 100%)",
            }}
          >
            Check Demo
            <style>
              {`
      .botonacio {
        position: relative; /* Asegura que el pseudo-elemento esté posicionado en relación al botón */
      }

      .botonacio::before {
  content: '';
  position: absolute;
  
  right: 2px;
  width: 80%;
  height: 20px; /* Controlamos el alto de la sombra */
  
  box-shadow: 0 14px 16px rgba(78, 146, 249, 0.4); 
}

     .botonacio::after {
  content: '';
  position: absolute;
  
  left: 2px;
  width: 80%;
  height: 20px; 
  
  box-shadow: 0 14px 16px rgba(195, 129, 219, 0.4); 
}
    `}
            </style>
          </button>
        </div>

        {/* Imagen 1 */}
        <img
          src="./1.home/1.png"
          alt="personitas"
          className="absolute h-[60%] w-auto bottom-0 md:right-[18%] object-cover opacity-20 md:opacity-100 z-10"
        />
        {/* Imagen 2 */}
        <img
          src="./1.home/8.png"
          alt="area curva"
          className="h-[87%] w-auto object-cover absolute top-0 right-0 z-5 opacity-80"
        />
        <img
          src="./1.home/8.png"
          alt="area curva"
          className="h-[87%] w-auto object-cover absolute top-0 right-0 z-5 opacity-80"
        />
        {/* Imagen 3 */}
        <img
          src="./1.home/6.png"
          alt="curva amarilla"
          className="h-[95%] w-auto object-cover absolute top-0 right-0 z-0"
        />
      </div>

      {/* Segunda sección con las imágenes */}
      <div className="h-[40%] w-full flex flex-wrap justify-center items-center gap-20 overflow-hidden">
        <img
          src="./1.home/2.png"
          alt="themewaagon"
          className="object-cover w-[100px]"
        />

        <img
          src="./1.home/3.png"
          alt="google"
          className="object-cover w-[100px]"
        />
        <img
          src="./1.home/4.png"
          alt="microsoft"
          className="object-cover w-[100px]"
        />
        <img
          src="./1.home/5.png"
          alt="mailbuster"
          className="object-cover w-[100px]"
        />
        <img
          src="./1.home/7.png"
          alt="netflix"
          className="object-cover w-[100px]"
        />
      </div>
      <Carrusel></Carrusel>
    </div>
  );
}
