import React, { useEffect, useState } from "react";

const EventGallery = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events-gallery")
      .then((res) => res.json())
      .then((events) => setEvents(events));
  }, []);
  return (
    <section className="w-11/12 mx-auto pt-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Event <span className="text-[#894fed]">Gallery</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          <div className="flex gap-6">
            {events.map((event) => (
              <img
                src={event.event_image}
                className="w-96 h-64 rounded-xl shadow-lg"
              />
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex gap-6 ml-6">
            {events.map((event) => (
              <img
                src={event.event_image}
                className="w-96 h-64 rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
