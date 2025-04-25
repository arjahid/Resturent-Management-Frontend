import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover"; // Import the Cover component
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";
import OrderTab from "./OrderTabPanel/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories=["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    console.log(category);
    const validCategory = categories.includes(category) ? category : "salad"; // Fallback to "salad" if category is undefined or invalid
    const initialIndex = categories.indexOf(validCategory);
    const [tabindex,setTabindex]=useState(initialIndex);
    const [menu]=useMenu();
   
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const desert = menu.filter((item) => item.category === "dessert");
   
    
    
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Forest | Order</title>
      </Helmet>
      <Cover img={coverImage} tittle="Order Food" />
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={desert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
