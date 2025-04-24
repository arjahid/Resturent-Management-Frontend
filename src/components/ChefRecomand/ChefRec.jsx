import React from "react";
import img1 from '../../assets/home/slide2.jpg';
import img2 from '../../assets/home/slide3.jpg';
import img3 from '../../assets/home/slide4.jpg';
import img4 from '../../assets/home/slide5.jpg';

const ChefRec = () => {
  const cards = [
    { id: 1, img: img1, title: "Delicious Salad", description: "Fresh and healthy salad with organic ingredients." },
    { id: 2, img: img2, title: "Tasty Soup", description: "Warm and comforting soup for every occasion." },
    { id: 3, img: img3, title: "Yummy Dessert", description: "Sweet and delightful dessert to end your meal." },
    { id: 4, img: img4, title: "Crispy Pizza", description: "Hot and cheesy pizza with a crispy crust." },
  ];

  return (
   <div>
    <div className="text-center p-4 sm:p-6 rounded-lg shadow-md mb-3 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto">
            <h2 className="text-white font-bold text-base sm:text-lg">YOU SHOULD TRY</h2>
            <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl">CHEF RECOMANDATION</h2>
            <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
        </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto my-8">
      {cards.map(card => (
        <div key={card.id} className="bg-white bg-opacity-10 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full">
          <figure className="mb-4">
            <img
              src={card.img}
              alt={card.title}
              className="rounded-xl w-full max-w-full"
            />
          </figure>
          <div className="text-left sm:text-center flex-grow">
            <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold text-white">
              {card.title}
            </h2>
            <p className="mb-6 text-base sm:text-lg text-gray-300">
              {card.description}
            </p>
          </div>
          <button className="btn btn-primary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600">
            Learn More
          </button>
        </div>
      ))}
    </div>
   </div>
  );
};

export default ChefRec;
