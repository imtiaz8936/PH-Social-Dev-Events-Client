import React from "react";

const JoinedEventsCard = ({ event, index }) => {
  return (
    <tr className="font-medium text-[16px]">
      <td>{index + 1}</td>
      <td>
        {event.event_title}
        <br />
        <span className="badge badge-secondary badge-md text-white">
          {event.event_type}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={event.joiner_image} alt={event.joiner_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{event.joiner_name}</div>
            <div className="text-sm opacity-70">{event.joiner_email}</div>
          </div>
        </div>
      </td>
      <td>{event.event_location}</td>
      <td>
        <span className="btn btn-outline border-2 border-red-500 text-red-500">
          Cancel Joining
        </span>
      </td>
    </tr>
  );
};

export default JoinedEventsCard;
