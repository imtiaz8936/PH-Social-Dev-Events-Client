import React from "react";

const EventGallery = () => {
  return (
    <section className="w-11/12 mx-auto pt-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Event <span className="text-[#894fed]">Gallery</span>
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {/* Image List */}
          <img
            src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2024/05/23/taposh_photo.3.jpg"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
          <img
            src="https://today.thefinancialexpress.com.bd/uploads/1522001899.jpg"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
          <img
            src="https://apparelresources.com/wp-content/uploads/2024/10/Current-state-of-women-workers-in-Bangladesh.jpg"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
          <img
            src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/02/03/bigd2.jpg"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
          <img
            src="https://hrdi.ac/uploads/post/481173370_1131837308953744_8588489929011971811_n-1742035447.webp"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
          <img
            src="https://images.onlymyhealth.com/only-my-health-english/images/2025/01/17/article/image/mn-cervical-cancer-awareness-month-1737090990088.webp"
            alt="Event"
            className="w-96 h-64 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
