import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);
  const [showName, setShowName] = useState(false);
  const [open, setOpen] = useState(false);
  const dummyPhotoURL =
    "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-man-avatar-on-isolate-png-image_13805756.png";

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("You Logged Out");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const profilePicNavLinks = (
    <>
      <NavLink
        to="/manage-events"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Manage Events</li>
      </NavLink>
      <NavLink
        to="/joined-events"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Joined Events</li>
      </NavLink>
      <NavLink
        to="/create-event"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Create Event</li>
      </NavLink>
    </>
  );

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Home</li>
      </NavLink>
      <NavLink
        to="/upcoming-events"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li className="font-semibold text-[17px]">Upcoming Events</li>
      </NavLink>
      {user && profilePicNavLinks}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100">
      <div className="navbar w-11/12 mx-auto">
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
        {user ? (
          <div className="navbar-end gap-4 relative">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 bg-gray-600 rounded-full flex justify-center items-center cursor-pointer"
            >
              {theme === "dark" ? (
                <MdOutlineLightMode
                  size={24}
                  color="white"
                ></MdOutlineLightMode>
              ) : (
                <MdOutlineDarkMode size={24} color="white"></MdOutlineDarkMode>
              )}
            </button>
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
              <img
                className="w-14 h-14 rounded-full"
                src={user.photoURL || dummyPhotoURL}
                alt=""
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              />
            </button>
            {showName && (
              <div className="absolute mt-32 mr-10 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap z-10">
                {user.displayName}
              </div>
            )}

            {open && (
              <div className="absolute right-0 top-full mt-3 w-58 rounded-box bg-base-100 shadow-lg space-y-4 z-50 origin-top-right">
                <div className="space-y-2 p-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {user.displayName}
                    </h2>
                    <p className="text-red-500 text-[16px]">{user.email}</p>
                  </div>

                  <ul className="list-none">{profilePicNavLinks}</ul>

                  <Link
                    to="/auth-login"
                    onClick={handleLogout}
                    className="btn w-full mt-4 bg-linear-to-r from-purple-600 to-indigo-500 text-white flex justify-center items-center gap-2"
                  >
                    Sign Out <IoLogOutOutline size={20} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-end gap-4">
            <Link
              to="/auth-login"
              className="btn bg-linear-to-r from-purple-600 to-indigo-500 hover:opacity-90 text-white text-[16px]"
            >
              Sign In
            </Link>
            <Link
              to="/auth-register"
              className="btn bg-linear-to-r from-purple-600 to-indigo-500 hover:opacity-90 text-white text-[16px]"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
