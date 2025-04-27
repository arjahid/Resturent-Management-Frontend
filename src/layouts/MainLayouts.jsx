import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";

const MainLayouts = () => {
  const loactaion = useLocation();
  const noHeaderFooter = loactaion.pathname.includes("login");

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayouts;
