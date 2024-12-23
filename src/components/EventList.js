// export default EventList;
import React from "react";
import "./styles/EventList.css";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Events:</h2>
      {events.length === 0 ? (
        <p>No events scheduled.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <strong>{event.name}</strong><br />
              <span>{`Start: ${event.startTime} | End: ${event.endTime}`}</span><br />
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
