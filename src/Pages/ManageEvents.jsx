import React, { use, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import ManageEventsCard from "./ManageEventsCard";

const ManageEvents = () => {
  const [myCreatedEvents, setMyCreatedEvents] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    if (user.email) {
      fetch(
        `https://social-dev-events-server.vercel.app/manage-events?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((eventsICreated) => setMyCreatedEvents(eventsICreated));
    }
  }, [user]);

  return (
    <div className="w-11/12 mx-auto">
      <title>Manage Events</title>
      <div className="flex justify-center">
        <button className="mb-5 cursor-pointer hover:text-purple-600 mt-10">
          <Link to="/upcoming-events" className="flex gap-1 items-center">
            <BsArrowLeft size={20} />
            <span className="font-medium">Back To Events</span>
          </Link>
        </button>
      </div>
      <h1 className="font-bold text-4xl text-center mb-10">
        Manage <span className="text-[#894fed]">Your Events</span>
      </h1>
      {myCreatedEvents.message === "Forbidden Access" ? (
        <div>403 {myCreatedEvents.message}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {myCreatedEvents.map((event) => (
            <ManageEventsCard
              key={event._id}
              event={event}
              myCreatedEvents={myCreatedEvents}
              setMyCreatedEvents={setMyCreatedEvents}
            ></ManageEventsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
