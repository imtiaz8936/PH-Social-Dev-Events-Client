import React, { use, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import ManageEventsCard from "./ManageEventsCard";

const ManageEvents = () => {
  const [myCreatedEvents, setMyCreatedEvents] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/manage-events?email=${user.email}`)
      .then((res) => res.json())
      .then((eventsICreated) => setMyCreatedEvents(eventsICreated));
  }, [user]);

  return (
    <div className="w-11/12 mx-auto">
      <title>Manage Events</title>
      <div className="flex justify-center">
        <button className="text-gray-600 mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link to="/upcoming-events" className="flex gap-1 items-center">
            <BsArrowLeft size={20} />
            <span className="font-medium">Back To Events</span>
          </Link>
        </button>
      </div>
      <h1 className="font-bold text-4xl text-center mb-10">
        Manage <span className="text-[#894fed]">Your Events</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myCreatedEvents.map((event) => (
          <ManageEventsCard key={event._id} event={event}></ManageEventsCard>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
