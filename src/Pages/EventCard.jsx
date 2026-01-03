import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={event.event_image}
        alt={event.event_title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {event.event_title}
        </h3>
        {/* <p className="text-sm text-gray-500 mb-2">{event.event_location}</p> */}

        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {event.event_type}
          </span>
          {/* <span className="text-sm text-gray-600">
            {new Date(event.event_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span> */}
        </div>

        <Link to={`/upcoming-events/event-details/${event._id}`}>
          <button className="w-full bg-linear-to-r from-purple-600 to-indigo-500 hover:opacity-90 text-white text-[17px] font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
            Event Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
