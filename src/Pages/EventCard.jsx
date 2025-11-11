import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Thumbnail */}
      <img
        src={event.event_image}
        alt={event.event_title}
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {event.event_title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{event.event_location}</p>

        {/* Event Type + Date */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {event.event_type}
          </span>
          <span className="text-sm text-gray-600">
            {new Date(event.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        {/* View Button */}
        <Link to={`/upcoming-events/event-details/${event._id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
            View Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
