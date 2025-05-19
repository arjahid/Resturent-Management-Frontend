import React, { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex justify-between items-center bg-orange-400 p-4">
        <span className="font-bold text-lg text-white">Dashboard</span>
        <button
          className="text-white text-2xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-20 top-0 left-0 h-full w-64 bg-orange-400 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block
        `}
        style={{ minHeight: "100vh" }}
      >
        <ul className="menu pt-16 md:pt-0">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaBook />
                  Mangade Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser />
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaCalendar />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd />
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart({cart?.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList />
                 Payment Real History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Salad
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
