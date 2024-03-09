import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';
import Calendar from './Calendar'; 
import Clock from './Clock'; 
import TeamMember from './TeamMember';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ isOpen, onClose, onDateTimeSelect }) => {
  const [content, setContent] = useState('Time');
  const [clockData, setClockData] = useState(null);
  const [calendarData, setCalendarData] = useState(null);

  const handleItemClick = (item) => {
    setContent(item);
  };

  const handleClockData = (data) => {
    setClockData(data);
  };

  const handleCalendarData = (data) => {
    setCalendarData(data);
  };

  const handleDateTimeSubmit = () => {
    onDateTimeSelect({ time: clockData, date: calendarData });
    setClockData(null);
    setCalendarData(null);
    setContent('Time');
    onClose();
  };
  
  useEffect(() => {
    if (clockData !== null && content === 'Time') {
      setContent('Date');
    }
  }, [clockData, content]);

  useEffect(() => {
    if (calendarData !== null && content === 'Date') {
      setContent('Add team member');
    }
  }, [calendarData, content]);

  if (!isOpen) return null;

  let modalContent = null;
  switch (content) {
    case 'Time':
      modalContent = <Clock onClockData={handleClockData} />;
      break;
    case 'Date':
      modalContent = <Calendar onCalendarData={handleCalendarData} />;
      break;
    case 'Add team member':
      modalContent = (
        <div>
          <TeamMember />
          <button className='time-btn' style={{ marginTop: "1rem" }} onClick={handleDateTimeSubmit}>Submit</button>
        </div>
      );
      break;
    default:
      modalContent = <div>Please select an option</div>;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}><CloseIcon/></button>

        <div className='modal-wrapper'>
          <div className='modal-ele'>
            <div onClick={() => handleItemClick('Time')}>Time</div>
            <div onClick={() => handleItemClick('Date')}>Date</div>
            <div onClick={() => handleItemClick('Add team member')}>Add team member</div>
          </div>
          <div>{modalContent}</div> 
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
