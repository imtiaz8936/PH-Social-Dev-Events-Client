import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16">
      <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side - Info section */}
        <div className="bg-linear-to-br from-purple-600 to-indigo-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
          <p className="text-purple-100 mb-6">
            Subscribe to stay updated with the latest social events, volunteer
            opportunities, and community stories.
          </p>
          <ul className="space-y-2 text-sm text-purple-100">
            <li>• Get notified about upcoming events</li>
            <li>• Learn how to contribute and volunteer</li>
            <li>• Be part of positive community change</li>
          </ul>
        </div>

        {/* Right side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-[#894fed] mb-4">
            Subscribe Now
          </h3>
          <p className="text-gray-600 mb-6">
            Stay connected and never miss an opportunity to make an impact.
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="button"
              className="w-full bg-linear-to-r from-purple-600 to-indigo-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy.{" "}
            <span className="underline cursor-pointer text-blue-500">
              Unsubscribe anytime.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
