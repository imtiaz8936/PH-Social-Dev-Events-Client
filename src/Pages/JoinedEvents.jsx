import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import JoinedEventsCard from "./JoinedEventsCard";
import { Link } from "react-router";
import { BsArrowLeft } from "react-icons/bs";

const JoinedEvents = () => {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const { user } = use(AuthContext);
  console.log(joinedEvents);

  useEffect(() => {
    if (user.email) {
      fetch(
        `social-dev-events-server.vercel.app/joined-events?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((eventJoined) => setJoinedEvents(eventJoined));
    }
  }, [user]);

  return (
    <div>
      <title>Joined Events</title>
      <div className="mb-20">
        <div className="flex justify-center">
          <button className="mb-5 cursor-pointer hover:text-purple-600 mt-10">
            <Link to="/upcoming-events" className="flex gap-1 items-center">
              <BsArrowLeft size={20} />
              <span className="font-medium">Back To Events</span>
            </Link>
          </button>
        </div>

        <h1 className="font-bold text-4xl text-center mb-10">
          Joined <span className="text-[#894fed]">Events</span>
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>SL No</th>
                <th>Events</th>
                <th>Joiner</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {joinedEvents.map((event, index) => (
                <JoinedEventsCard
                  key={event._id}
                  event={event}
                  index={index}
                ></JoinedEventsCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JoinedEvents;
