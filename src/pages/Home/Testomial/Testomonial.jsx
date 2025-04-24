import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testomonial = () => {
    const [reviews,setReviews]=useState([]);
    useState(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className='my-20'>
            <div>
            <div className="relative z-10 text-center p-4 sm:p-6 mb-6 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto">
                <h2 className="text-white font-bold text-sm sm:text-lg">What out client say</h2>
                <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Testomonials</h2>
                <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
            </div>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide>
                key={review._id}
                <div className='m-24'>
                    <p>{review.details}</p>
                    <h3 className="2xl text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testomonial;