import React, { use } from "react";
import EventCard from "./EventCard";
const latestEventsPromise = fetch(
  "http://localhost:3000/latest-upcoming-events"
).then((res) => res.json());
const ShowLatestCreatedEvents = () => {
  const latestEvents = use(latestEventsPromise);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-4xl text-center mb-10">
        Events To <span className="text-[#894fed]">Be Held</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestEvents.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default ShowLatestCreatedEvents;
