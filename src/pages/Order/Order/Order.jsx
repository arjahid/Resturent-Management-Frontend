import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover"; // Import the Cover component
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";

import OrderTab from "./OrderTabPanel/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories=["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    const validCategory = categories.includes(category) ? category : "salad"; // Fallback to "salad" if category is undefined or invalid
    const initialIndex = categories.indexOf(validCategory);
    const [tabindex,setTabindex]=useState(initialIndex);
    const [menu]=useMenu();
   
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const dessert = menu.filter((item) => item.category === "dessert");
   
    
    
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="mb-6 ">
      <Helmet>
        <title>Forest | Order</title>
      </Helmet>
      <Cover img={coverImage} tittle="Order Food" />
      <div className=" mt-4">
      <Tabs selectedIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab> {/* Fixed spelling from "Desert" to "Dessert" */}
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
            <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
