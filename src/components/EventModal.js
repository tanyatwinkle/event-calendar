import React, { useState } from "react";
import "./styles/Modal.css";

const EventModal = ({ onClose, onSubmit, selectedDate }) => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && startTime && endTime) {
      onSubmit({
        eventName,
        description,
        startTime,
        endTime,
        selectedDate: selectedDate ? selectedDate.toDateString() : new Date().toDateString(),
      });
      setEventName("");
      setDescription("");
      setStartTime("");
      setEndTime("");
      onClose(); // Close modal
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add Event</h3>
        <form onSubmit={handleSubmit}>
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <label>Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="button-container">
            <button type="submit">Add Event</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
