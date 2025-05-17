import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
//  TODO:get isAdmin value from the database

  const [isAdmin] = useAdmin()
    const [cart]=useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
         {
          isAdmin ? <> 
            <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
             <FaUtensils> </FaUtensils>
             add Items
             
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
             <FaBook></FaBook>
             Mangade Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
             <FaUser></FaUser>
             All users
            </NavLink>
          </li>
          </> : 
          <>
            <li>
            <NavLink to="/">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart({cart?.length })
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          </>
         }
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/contact'>
              <FaEnvelope></FaEnvelope>
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>
              <FaSearch></FaSearch>
             Salad
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
