import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover"; // Import the Cover component
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";

const Order = () => {
    const [tabindex,setTabindex]=useState(0)
    const [menu]=useMenu();
    const desert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soup = menu.filter((item) => item.category === "soup");
    const offer = menu.filter((item) => item.category === "offered");
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
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2 my-16">
            {
                salad.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
