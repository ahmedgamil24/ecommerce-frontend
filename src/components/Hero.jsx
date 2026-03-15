import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {

  const heroImages = [
    "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
    "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
    "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
  ];

  return (
    <>
      <div className="mb-4 border-t border-gray-200"></div>

      <div className="w-full mb-4">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-xl overflow-hidden"
        >

          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                loading="lazy"
                className="w-full   max-h-[500px] rounded-2xl object-cover"
              />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </>
  );
};

export default Hero;