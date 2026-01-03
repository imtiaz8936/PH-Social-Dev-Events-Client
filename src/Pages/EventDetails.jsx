import React from "react";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const EventDetails = () => {
  const result = useLoaderData();
  const event = result;

  return (
    <div>
      <title>Event Details</title>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 mt-10 mb-20">
        <img
          src={event.event_image}
          alt={event.event_title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {event.event_title}
        </h2>

        <div className="flex flex-wrap justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {event.event_type}
          </span>
          <span className="text-sm text-gray-600">
            {new Date(event.event_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <p className="text-gray-600 mb-4 flex flex-inline gap-1 items-center">
          <IoLocationSharp size={20} />{" "}
          <span className="font-medium">{event.event_location}</span>
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Event Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {event.event_description}
          </p>
        </div>

        <div className="border-t pt-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Event Organizer
          </h3>
          <p className="text-gray-800 font-medium">{event.creator_name}</p>
          <p className="text-blue-600 text-sm mb-1">{event.creator_email}</p>
          <p className="text-gray-600 text-sm flex flex-inline gap-1 items-center">
            <IoCallSharp size={20} /> {event.creator_contact}
          </p>
        </div>

        <Link to={`/join-event-form/${event._id}`}>
          <button className="w-full bg-linear-to-r from-purple-600 to-indigo-500 hover:opacity-90 text-white text-[17px] font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
            Join This Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
