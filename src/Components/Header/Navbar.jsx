import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { name } = use(AuthContext);
  console.log(name);
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Home</li>
      </NavLink>
      <NavLink
        to="/my-products"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Upcoming Events</li>
      </NavLink>
      <NavLink
        to="/my-products"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">My Events</li>
      </NavLink>
      <NavLink
        to="/create-product"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Create Event</li>
      </NavLink>
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex gap-1 items-center font-bold">
            <img className="w-18 h-16" src={logo} alt="" />
            <div>
              <p className="text-xl">
                Social <span className="text-[#894fed] text-3xl">Events</span>
              </p>
              <p className="text-xl">Manager</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
