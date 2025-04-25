import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover"; // Import the Cover component
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
    const [tabindex,setTabindex]=useState(0)
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
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
