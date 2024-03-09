import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const BasicDateCalendar = ({ onCalendarData }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const sendData = () => {
    onCalendarData(selectedDate);
  };

  return (
    <div>
      <h3>Select a date for meeting</h3>
      <p className="time-p">The following date will be set for the meeting:</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleDateChange} />
      </LocalizationProvider>

      <div>
        <button onClick={sendData} className="time-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicDateCalendar;
