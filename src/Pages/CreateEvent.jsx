import React, { use } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const event_title = form.eventTitle.value;
    const event_type = form.eventType.value;
    const event_image = form.eventImageURL.value;
    const creator_name = form.eventCreatorName.value;
    const creator_email = form.eventCreatorEmail.value;
    const creator_contact = form.eventCreatorContact.value;
    const creator_image = form.eventCreatorImageURL.value || user.photoURL;
    const event_location = form.eventLocation.value;
    const event_description = form.eventDescription.value;

    if (!selectedDate) {
      toast.error("Please pick a date for your event");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosenDate = new Date(selectedDate);
    chosenDate.setHours(0, 0, 0, 0);

    if (chosenDate <= today) {
      toast.error("Please pick a future date");
      return;
    }

    const newEvent = {
      event_title,
      event_type,
      event_image,
      creator_name,
      creator_email,
      creator_contact,
      creator_image,
      event_location,
      event_description,
      event_date: selectedDate.toISOString(),
    };

    fetch("https://social-dev-events-server.vercel.app/create-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Event Created Successfully");
        navigate("/upcoming-events");
      })
      .catch(() => toast.error("Failed to create event. Try again!"));
  };

  return (
    <div className="w-11/12 mx-auto">
      <title>Create Event</title>

      <div className="flex justify-center">
        <button className="mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link to="/upcoming-events" className="flex gap-1 items-center">
            <BsArrowLeft size={20} />
            <span className="font-medium">Back To Events</span>
          </Link>
        </button>
      </div>

      <h1 className="font-bold text-4xl text-center mb-10">
        Create <span className="text-[#894fed]">an Event</span>
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-20">
        <form
          onSubmit={handleCreateEvent}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              name="eventTitle"
              placeholder="e.g. Tree Plantation"
              required
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              required
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a Type</option>
              <option>Health</option>
              <option>Environment</option>
              <option>Education</option>
              <option>Community</option>
              <option>Equality</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Image URL
            </label>
            <input
              type="url"
              name="eventImageURL"
              required
              placeholder="https://..."
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="eventCreatorName"
              value={user?.displayName || ""}
              disabled
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="eventCreatorEmail"
              value={user?.email || ""}
              disabled
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Contact
            </label>
            <input
              type="tel"
              name="eventCreatorContact"
              placeholder="e.g. +880 121-1234567"
              required
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Image URL
            </label>
            <input
              type="url"
              name="eventCreatorImageURL"
              placeholder="https://..."
              required
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Location
            </label>
            <input
              type="text"
              name="eventLocation"
              required
              placeholder="City, Country"
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select event date"
              dateFormat="MMMM d, yyyy"
              required
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">
              Event Description
            </label>
            <textarea
              name="eventDescription"
              rows="3"
              required
              placeholder="e.g. The event is about..."
              className="w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Create an Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
