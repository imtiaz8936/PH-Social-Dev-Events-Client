import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";

const ManageEventsCard = ({ event, myCreatedEvents, setMyCreatedEvents }) => {
  const handleDeleteEvent = () => {
    fetch(`social-dev-events-server.vercel.app/delete-event/${event._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("You Successfully Deleted The Event");
          const remainingEvents = myCreatedEvents.filter(
            (e) => e._id !== event._id
          );
          setMyCreatedEvents(remainingEvents);
        }
      });
  };
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
        <div className="flex justify-between">
          <Link to={`/update-event/${event._id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
              Update Event
            </button>
          </Link>

          <button
            onClick={handleDeleteEvent}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200"
          >
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageEventsCard;
