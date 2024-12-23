import React, { useState, useEffect } from "react";
import "./styles/Calendar.css";

const Calendar = ({ events, selectedDate, onDayClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateCalendar = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const daysArray = [];
    
    // Fill in empty slots for the days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }

    // Add the actual days of the month
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    setDaysInMonth(daysArray);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDayClick = (date) => {
    onDayClick(date);
  };

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="prev-btn" onClick={handlePreviousMonth}>
          &lt;
        </button>
        <h3>{`${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`}</h3>
        <button className="next-btn" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>

      <div className="weekdays">
        {weekdays.map((weekday, index) => (
          <div key={index} className="weekday">
            {weekday}
          </div>
        ))}
      </div>
      
      <div className="calendar-days">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${!day ? "empty" : ""} ${
              day && day.toDateString() === new Date().toDateString() ? "today" : ""
            }`}
            onClick={() => day && handleDayClick(day)}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
