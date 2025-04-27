import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import Menucategory from "./MenuCategory/Menucategory";
import desertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {
  const [menu] = useMenu();
  const desert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offer = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Forest | Menu</title>
      </Helmet>
      <Cover img={menuImage} tittle="Our Menu" />
      {/* main cover */}
      <div className="relative z-10 text-center p-4 sm:p-6 lg:p-8 mb-6 w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto">
        <h2 className="text-white font-bold text-xs sm:text-sm md:text-lg lg:text-xl">Don't miss</h2>
        <div className="my-4 mx-auto w-2/3 sm:w-1/2 md:w-1/3 border-b-2 border-white"></div>
        <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Today's Offer
        </h2>
        <div className="my-4 mx-auto w-2/3 sm:w-1/2 md:w-1/3 border-b-2 border-white"></div>
      </div>
      {/* offer item */}
      <Menucategory items={offer} />
      {/* desert item */}
      <Cover img={desertImage} tittle="desert" />
      
      <Menucategory items={desert} title='desert' />
      {/* pizza */}
      
        <Cover img={pizzaImage} tittle="pizza" />
      <Menucategory
      items={pizza}
      title="Pizza"
      >

      </Menucategory>
      {/* salad */}
        <Cover img={saladImage} tittle="salad" />
        <Menucategory
        items={salad}
        title="Salad"
        ></Menucategory>
        {/* soup */}

        <Cover img={soupImage} tittle="soup" />
        <Menucategory
        items={soup}
        title="soup"
        ></Menucategory>
        {/* dinks */}
    </div>
  );
};

export default Menu;
