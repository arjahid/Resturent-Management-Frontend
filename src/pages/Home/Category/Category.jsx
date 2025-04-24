import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="w-full h-auto" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-white">
            Salad
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide3} alt="" className="w-full h-auto" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="w-full h-auto" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-white">
            Pizza
          </h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt="" className="w-full h-auto" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-white">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="w-full h-auto" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
