import React, { useState, useEffect } from "react";
import styles from "./styles/Activity.module.css";
import Modal from "./Modal";
import Scheduler from "./Scheduler";

const Activity = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedDateStr = `${formattedHours}.${formattedMinutes} ${ampm}, ${getDayOfWeek(
      today
    )} ${day} ${monthNames[monthIndex]} ${year}`;
    setFormattedDate(formattedDateStr);
  }, []);

  const getDayOfWeek = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const handleDateTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime);
    console.log(dateTime)
    // Do something with the selected date and time, like sending it to a server
  };

  

  return (
    <div className={styles.wrapper}>
      <div className={styles.tbox}>
        <h3>Recent Activity</h3>
        <p>{formattedDate}</p>
        <h3>You Posted a New Job</h3>
        <p>
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className={styles.align}>
          <h4>Schedule a call</h4>
          <button onClick={() => setModalOpen(true)} >Schedule</button>
        </div>
      </div>

      <div className="tbox">
        <Scheduler selectedDateTime={selectedDateTime}/>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onDateTimeSelect={handleDateTimeSelect} />
    </div>
  );
};

export default Activity;
