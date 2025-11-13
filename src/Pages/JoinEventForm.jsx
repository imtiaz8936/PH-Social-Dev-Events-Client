import React, { use } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { BsArrowLeft } from "react-icons/bs";
import toast from "react-hot-toast";

const JoinEventForm = () => {
  const joiningEvent = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleJoinEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const event_title = form.eventTitle.value;
    const event_type = form.eventType.value;
    const event_image = form.eventImageURL.value;
    const joiner_name = form.eventJoinerName.value;
    const joiner_email = form.eventJoinerEmail.value;
    const joiner_contact = form.eventJoinerContact.value;
    const joiner_image = form.eventJoinerImageURL.value || user.photoURL;
    const event_location = form.eventLocation.value;
    const newJoinEvent = {
      event_id: joiningEvent._id,
      event_title,
      event_type,
      event_image,
      joiner_name,
      joiner_email,
      joiner_contact,
      joiner_image,
      event_location,
      joined_at: new Date(),
    };

    fetch("http://localhost:3000/join-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJoinEvent),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("You Joined The Event Successfully");
    navigate("/joined-events");
  };

  return (
    <div>
      <title>Join Event</title>
      <div className="flex justify-center">
        <button className="text-gray-600 mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link
            to={`http://localhost:5173/upcoming-events/event-details/${id}`}
            className="flex gap-1 items-center"
          >
            <BsArrowLeft size={20} />
            <span className="font-medium">Back To Event</span>
          </Link>
        </button>
      </div>

      <h1 className="font-bold text-4xl text-center mb-10">
        Join <span className="text-[#894fed]">an Event</span>
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-8">
        <form
          onSubmit={handleJoinEvent}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              name="eventTitle"
              disabled={true}
              value={joiningEvent.event_title}
              placeholder="e.g. Tree Plantation"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Type
            </label>
            <input
              name="eventType"
              disabled={true}
              value={joiningEvent.event_type}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          {/* Event Image URL */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Image URL
            </label>
            <input
              type="url"
              disabled={true}
              value={joiningEvent.event_image}
              name="eventImageURL"
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          {/* Event Joiner Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              disabled={true}
              value={user.displayName}
              name="eventJoinerName"
              placeholder="e.g. Artisan Roasters"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              disabled={true}
              value={user.email}
              name="eventJoinerEmail"
              placeholder="e.g. example@email.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Contact
            </label>
            <input
              type="tel"
              name="eventJoinerContact"
              placeholder="e.g. +880 121-1234567"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Image URL
            </label>
            <input
              type="url"
              name="eventJoinerImageURL"
              placeholder="https://..."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Location
            </label>
            <input
              type="text"
              disabled={true}
              value={joiningEvent.event_location}
              name="eventLocation"
              placeholder="City, Country"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-not-allowed"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Confirm Your Joining
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinEventForm;
