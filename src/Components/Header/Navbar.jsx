import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);
  const [showName, setShowName] = useState(false);
  const dummyPhotoURL =
    "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-man-avatar-on-isolate-png-image_13805756.png";

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("You Logged Out");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
    </>
  );

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
        {user ? (
          <div className="navbar-end gap-4 relative">
            <button
              className="cursor-pointer"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <img
                className="w-14 h-14 rounded-full"
                src={user.photoURL || dummyPhotoURL}
                alt=""
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
              />
            </button>
            {/* Tooltip */}
            {showName && (
              <div className="absolute mt-32 mr-10 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap z-10">
                {user.displayName}
              </div>
            )}
            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm space-y-4"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: "--anchor-1" }}
            >
              <div className="space-y-2">
                <div>
                  <h2 className="text-xl font-semibold">{user.displayName}</h2>
                  <p className="text-red-500 text-[16px]">{user.email}</p>
                </div>
                {profilePicNavLinks}
              </div>
              <Link
                to="/auth-login"
                onClick={handleLogout}
                className="btn btn-primary w-full text-[16px] 
                                flex flex-inline justify-center items-center"
              >
                Log Out <IoLogOutOutline size={20} />
              </Link>
            </div>
            <Link
              to="/auth-login"
              onClick={handleLogout}
              className="btn btn-primary text-[16px]"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="navbar-end gap-4">
            <Link to="/auth-login" className="btn btn-primary text-[16px]">
              Log In
            </Link>
            <Link to="/auth-register" className="btn btn-primary text-[16px]">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
