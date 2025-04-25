import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menu from '../../../assets/menu/banner3.jpg'
import PropularMenu from "../PropularMenu/PropularMenu";

const Menu = () => {
  console.log("menu page render");
  return (
    <div>
      <Helmet>
        <title>Forest | Menu</title>
      </Helmet>
      <Cover img={menu} tittle="Our Menu"></Cover>
      <PropularMenu></PropularMenu>
      <Cover img={menu} tittle="Our Menu"></Cover>
      <PropularMenu></PropularMenu>
      <Cover img={menu} tittle="Our Menu"></Cover>
      <PropularMenu></PropularMenu>
      
    
    </div>
  );
};

export default Menu;
