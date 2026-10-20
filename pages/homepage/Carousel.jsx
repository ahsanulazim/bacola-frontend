// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import carousels from "../../json/carousels.json";
import { LuArrowRight } from "react-icons/lu";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {carousels.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <img src={carousel.image} alt={carousel.title} />
            <div className="absolute w-4/5 sm:w-3/5 top-0 bottom-0 font-inter p-5 sm:p-10 lg:p-20 flex items-center">
              <div className="text-left">
                <p className="font-dosis text-xs sm:mb-3">
                  EXCLUSIVE OFFER{" "}
                  <span className="badge badge-success">
                    {carousel.discount}% OFF
                  </span>
                </p>
                <h2 className="font-bold text-2xl sm:text-5xl">
                  {carousel.title}
                </h2>
                <p className="text-sm sm:text-base sm:mt-5">
                  {carousel.subtitle}
                </p>
                <p className="text-sm my-2 sm:my-5">
                  from{" "}
                  <span className="font-dosis font-bold text-error text-lg sm:text-2xl md:text-4xl">
                    ${carousel.price}
                  </span>
                </p>
                <button className="btn btn-info max-sm:btn-sm rounded-full">
                  Shop Now <LuArrowRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
