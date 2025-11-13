import React, { use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Link, useLoaderData, useNavigate } from "react-router";
import { BsArrowLeft } from "react-icons/bs";

const UpdateEventForm = () => {
  const { user } = use(AuthContext);
  const updatingEvent = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const event_title = form.eventTitle.value;
    const event_type = form.eventType.value;
    const event_image = form.eventImageURL.value;
    const creator_contact = form.eventCreatorContact.value;
    const creator_image = form.eventCreatorImageURL.value || user.photoURL;
    const event_location = form.eventLocation.value;
    const event_description = form.eventDescription.value;
    const updatedEvent = {
      event_title,
      event_type,
      event_image,
      creator_contact,
      creator_image,
      event_location,
      event_description,
    };

    fetch(`http://localhost:3000/update-event/${updatingEvent._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Your Event Updated Successfully");
    navigate("/manage-events");
  };

  return (
    <div className="w-11/12 mx-auto">
      <title>Update Event</title>
      <div className="flex justify-center">
        <button className="text-gray-600 mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link to="/manage-events" className="flex gap-1 items-center">
            <BsArrowLeft size={20} />
            <span className="font-medium">Back To Your Events</span>
          </Link>
        </button>
      </div>

      <h1 className="font-bold text-4xl text-center mb-10">
        Update <span className="text-[#894fed]">an Event</span>
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-8">
        <form
          onSubmit={handleUpdateEvent}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              defaultValue={updatingEvent.event_title}
              name="eventTitle"
              placeholder="e.g. Tree Plantation"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              defaultValue={updatingEvent.event_type}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a Type</option>
              <option>Health</option>
              <option>Environment</option>
              <option>Education</option>
              <option>Community</option>
              <option>Equality</option>
            </select>
          </div>

          {/* Product Image URL */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Image URL
            </label>
            <input
              type="url"
              defaultValue={updatingEvent.event_image}
              name="eventImageURL"
              placeholder="https://..."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Seller Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              disabled={true}
              value={user.displayName}
              name="eventCreatorName"
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
              name="eventCreatorEmail"
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
              defaultValue={updatingEvent.creator_contact}
              name="eventCreatorContact"
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
              defaultValue={updatingEvent.creator_image}
              name="eventCreatorImageURL"
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
              defaultValue={updatingEvent.event_location}
              name="eventLocation"
              placeholder="City, Country"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Simple Description about your Event
            </label>
            <textarea
              rows="3"
              defaultValue={updatingEvent.event_description}
              name="eventDescription"
              placeholder="e.g. The event is about..."
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Confirm Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEventForm;
