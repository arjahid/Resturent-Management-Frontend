import React from 'react';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white'>
                <div className="text-center p-4 sm:p-6 rounded-lg shadow-md mb-3 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto">
            <h2 className="text-white font-bold text-base sm:text-lg">Check it Out</h2>
            <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl">FEATURED ITEM</h2>
            <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
        </div>
        <div className='md:flex justyfy-center items-center pb-20 pt-12 px-36'>
            <div>
                <img src={featured} alt="" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className='md:ml-10 text-white'>
                <p>Aug 20,2028</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad a expedita laborum aperiam?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 hover:bg-teal-300">Order NOw</button>
            </div>
        </div>

        </div>
    );
};

export default Featured;