import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImage from '../../../assets/menu/banner3.jpg';
import useMenu from "../../../Hooks/useMenu";


const Menu = () => {
   const [menu]=useMenu();
   const desert= menu.filter(item => item.category === 'dessert');
   const salad= menu.filter(item => item.category === 'salad');
    const pizza= menu.filter(item => item.category === 'pizza');
    const soup= menu.filter(item => item.category === 'soup');
    const offer= menu.filter(item => item.category === 'offered');

  
  return (
    <div>
      <Helmet>
        <title>Forest | Menu</title>
      </Helmet>
      <Cover img={menuImage} tittle="Our Menu"></Cover>
      <div className="relative z-10 text-center p-4 sm:p-6 mb-6 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <h2 className="text-white font-bold text-sm sm:text-lg">
            Dont't miss
          </h2>
          <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
          <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            Todays offer
          </h2>
          <div className="my-4 mx-auto w-3/4 sm:w-1/2 border-b-2 border-white"></div>
        </div>
      
    
    </div>
  );
};

export default Menu;
