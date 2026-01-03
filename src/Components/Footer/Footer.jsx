import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex gap-1 items-center font-bold">
            <img className="w-18 h-16" src={logo} alt="" />
            <div>
              <p className="text-xl">
                Social <span className="text-[#894fed] text-3xl">Events</span>
              </p>
              <p className="text-xl">Manager</p>
            </div>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connecting communities through impactful social development events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:justify-center">
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/upcoming-events" className="hover:underline">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex lg:justify-end items-center gap-5">
          <a
            href="#"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 2 .1v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12" />
            </svg>
          </a>

          <a
            href="#"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-3.8a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3z" />
            </svg>
          </a>

          <a
            href="#"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M18.9 2H22l-7.2 8.2L23 22h-6.8l-5.3-7-6 7H2l7.7-8.9L1.5 2H8l4.8 6.3L18.9 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400">
        © 2026 Social Events Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
