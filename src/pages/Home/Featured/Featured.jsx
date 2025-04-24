import React from 'react';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white py-12 relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
            <div className="relative z-10 text-center p-4 sm:p-6 mb-6 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto">
                <h2 className="text-white font-bold text-sm sm:text-lg">Check it Out</h2>
                <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Featured Item</h2>
                <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-12 lg:px-36">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img src={featured} alt="Featured Dish" className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg" />
                </div>
                <div className="md:ml-10 text-white text-center md:text-left md:w-1/2">
                    <p className="text-xs sm:text-sm md:text-base">Aug 20, 2028</p>
                    <h3 className="uppercase font-semibold text-base sm:text-lg md:text-xl mt-2">Where can I get some?</h3>
                    <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad a expedita laborum aperiam?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-6 hover:bg-teal-300 transition-colors">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Featured;