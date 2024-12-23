import { useState, useEffect } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem("events")) || []);

  const addEvent = (event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const editEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => 
      event.name === updatedEvent.name ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return { events, addEvent, editEvent, deleteEvent };
};
