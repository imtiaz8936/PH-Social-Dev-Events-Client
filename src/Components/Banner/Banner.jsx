import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { motion as Motion } from "framer-motion";
const Banner = () => {
  const { user } = use(AuthContext);
  return (
    <section className="w-11/12 mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 text-center md:text-left">
        <Motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 18,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Empower Your Community with
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-500">
              {" "}
              Social Development Events
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Discover, create, and join impactful social events around you.
            Together, let's build a stronger, cleaner, and more connected world.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <Link to={user ? "/create-event" : "/auth-register"}>
              <button className="border-2 border-purple-500 text-purple-600 font-semibold px-6 py-3 rounded-md">
                Get Started
              </button>
            </Link>
            <Link to="/upcoming-events">
              <button className="bg-linear-to-r from-purple-600 to-indigo-500 text-white font-semibold px-6 py-3 rounded-md">
                Explore Events
              </button>
            </Link>
          </div>
        </Motion.div>
      </div>

      <div className="flex-1 flex justify-center">
        <Motion.img
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 16,
          }}
          viewport={{ once: false, amount: 0.3 }}
          src="https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--587a29f3-7188-4a11-aef6-2be6bb3a03a2/hands-together.jpg?quality=80&preferwebp=true"
          alt="Community illustration"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
