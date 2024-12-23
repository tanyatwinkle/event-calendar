// export default App;
import React, { useState } from "react";
import Calendar from "./components/Calendar";
import EventList from "./components/EventList";
import EventModal from "./components/EventModal";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([
    { date: new Date(2024, 11, 23), name: "Meeting", description: "Discuss project milestones", startTime: "10:00 AM", endTime: "11:00 AM" },
    { date: new Date(2024, 11, 23), name: "Lunch", description: "Lunch break with team", startTime: "12:00 PM", endTime: "1:00 PM" },
    { date: new Date(2024, 11, 24), name: "Workshop", description: "JavaScript deep dive", startTime: "2:00 PM", endTime: "4:00 PM" },
    { date: new Date(2024, 11, 26), name: "Team Meeting", description: "Review sprint progress", startTime: "3:00 PM", endTime: "4:00 PM" },
    // Add more events here as needed
  ]);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const [monthEvents, setMonthEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    const selectedEvents = events.filter(event => event.date.toDateString() === date.toDateString());
    setSelectedDayEvents(selectedEvents);
  };

  const handleViewAllEvents = () => {
    const selectedMonth = new Date().getMonth();
    const eventsForMonth = events.filter(event => event.date.getMonth() === selectedMonth);
    setMonthEvents(eventsForMonth);
    setSelectedDayEvents([]);
  };

  const handleViewDayEvents = () => {
    if (selectedDate) {
      const allEventsForDay = events.filter(event => event.date.toDateString() === selectedDate.toDateString());
      setSelectedDayEvents(allEventsForDay);
      setMonthEvents([]);
    }
  };

  const handleAddEvent = (event) => {
    // Create new event object and update the state
    const newEvent = { ...event, date: new Date(event.selectedDate) };
    setEvents(prevEvents => [...prevEvents, newEvent]);
    // Re-filter the events based on the selected view (day or month)
    if (selectedDate) {
      setSelectedDayEvents(prevEvents => [...prevEvents, newEvent]);
    }
    if (new Date().getMonth() === selectedDate?.getMonth()) {
      handleViewAllEvents();  // To refresh the event list for the month.
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Calendar
        events={events}
        selectedDate={selectedDate}
        onDayClick={handleDayClick}
      />

      <div className="event-actions">
        <button onClick={handleViewAllEvents}>View All Events for the Month</button>
        <button onClick={handleViewDayEvents}>View All Events for the Day</button>
        <button onClick={openModal}>Add Event</button>
      </div>

      {/* Display event list */}
      {(selectedDayEvents.length > 0 || monthEvents.length > 0) && (
        <EventList events={selectedDayEvents.length > 0 ? selectedDayEvents : monthEvents} />
      )}

      {/* Modal to add event */}
      {isModalOpen && (
        <EventModal
          selectedDate={selectedDate}
          onSubmit={handleAddEvent}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
