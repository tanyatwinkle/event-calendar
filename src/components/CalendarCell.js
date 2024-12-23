import React from "react";

const CalendarCell = ({ day, events, onDayClick }) => (
  <div className="calendar-cell" onClick={() => onDayClick(day)}>
    <div className="day-number">{day.getDate()}</div>
    <ul>
      {events.map((event, i) => (
        <li key={i} className={`event-item ${event.color}`}>
          {event.name}
        </li>
      ))}
    </ul>
  </div>
);

export default CalendarCell;
