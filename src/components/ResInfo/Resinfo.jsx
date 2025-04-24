import React from 'react';
import img from '../../assets/home/chef-service.jpg';

const Resinfo = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50">
        
      </div>
      <div className="hero-content justify-start items-start text-left px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10">
        <div className="max-w-lg bg-white bg-opacity-10 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow-lg">
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            The <span className='text-green-500'>Forest</span> Restaurant
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-300">
            Experience the finest dining in a serene forest ambiance. Enjoy our exquisite menu crafted with care and passion.
          </p>
          <button className="btn btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resinfo;
