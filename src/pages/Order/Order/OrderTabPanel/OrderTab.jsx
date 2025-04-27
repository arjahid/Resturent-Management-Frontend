import React, { useState } from "react";
import FoodCard from "../../FoodCard/FoodCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required Swiper modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Constants for pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Swiper pagination configuration
  const pagination = {
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className}">${index + 1}</span>`,
  };

  return (
    <div className="order-tab-container">
      {/* Swiper for displaying items */}
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 my-16">
            {currentItems.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &#x25C0; Go Back
        </button>
        <span className="mx-6 text-lg font-semibold text-gray-700">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go Forward &#x25B6;
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
