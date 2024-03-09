import React, { useState } from 'react';
import "./styles/clock.css";

function TimePicker({onClockData}) {
  const [time, setTime] = useState('0000');
  const [clockData, setClockData] = useState('');


  const handleInputChange = (index, value) => {
    // Ensure the value is a digit
    const digit = parseInt(value, 10);
    if (!isNaN(digit) && digit >= 0 && digit <= 9) {
      // Update the time state at the given index
      setTime((prevTime) => {
        const newTime = prevTime.split('');
        newTime[index] = value;
        return newTime.join('');
      });
    }
  };

  const sendData = () =>{
    setClockData(time);
    onClockData(time);
  }

  return (
    <div>
      <div className='time-wrapper'>
        <h3>Select a time for meeting</h3>
        <p className='time-p'>The following time will be set for the meeting:</p>
      </div>

      <input
        className='time-input'
        type="text"
        value={time[0]}
        onChange={(e) => handleInputChange(0, e.target.value)}
        maxLength="1"
        style={{ width: '40px', marginRight: '5px' }}
      />
      <input
      className='time-input'
        type="text"
        value={time[1]}
        onChange={(e) => handleInputChange(1, e.target.value)}
        maxLength="1"
        style={{ width: '40px', marginRight: '5px' }}
      />
      <input
        type="text"
        className='time-input'
        value={time[2]}
        onChange={(e) => handleInputChange(2, e.target.value)}
        maxLength="1"
        style={{ width: '40px', marginLeft: '5px', marginRight: '5px' }}
      />
      <input
        type="text"
        className='time-input'
        value={time[3]}
        onChange={(e) => handleInputChange(3, e.target.value)}
        maxLength="1"
        style={{ width: '40px', marginLeft: '5px' }}
      />

      <br />
      <p className='time-base'>time in 24hr format</p>
      <button onClick={sendData} className='time-btn'>Next</button>
    </div>
  );
}

export default TimePicker;
