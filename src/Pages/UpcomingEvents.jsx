import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

fetch("https://social-dev-events-server.vercel.app/upcoming-events").then(
  (res) => res.json()
);

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch("https://social-dev-events-server.vercel.app/upcoming-events")
      .then((res) => res.json())
      .then((events) => setUpcomingEvents(events));
  }, []);

  return (
    <div className="w-11/12 mx-auto ">
      <title>Upcoming Events</title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {upcomingEvents.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
