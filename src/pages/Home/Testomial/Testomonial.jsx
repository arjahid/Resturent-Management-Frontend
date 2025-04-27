import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testomonial = () => {
  const [reviews, setReviews] = useState([]);
  useState(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20 px-4 sm:px-6 md:px-12">
      <div>
        <div className="relative z-10 text-center p-4 sm:p-6 mb-6 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <h2 className="text-white font-bold text-sm sm:text-lg">
            What our clients say
          </h2>
          <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            Testimonials
          </h2>
          <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-8 mx-4 sm:mx-12 md:mx-24 flex flex-col items-center text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-4 sm:py-6 text-sm sm:text-base md:text-lg">
                {review.details}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-orange-400">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomonial;
