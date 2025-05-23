import React, { useContext } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiPalmTree } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart]=useCart();
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <a>Dasboard</a>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
          <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-sm badge-secondary">
        
               +{cart?.length}
            </div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost">
            LogOut
          </button>
          <span className="pt-2 ">{user?.displayName} </span>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-ghost text-xl"
          >
            <span className="text-amber-500">
              <IoFastFoodSharp />
            </span>
            Forest
            <span className="text-green-600">
              <GiPalmTree />
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
