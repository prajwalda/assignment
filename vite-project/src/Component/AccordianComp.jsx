import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function AccordianComp() {
  const [showAll, setShowAll] = useState(false);
  const [pinnedItems, setPinnedItems] = useState([]);

  const randomDateTime = () => {
    const today = new Date();
    const randomDay = Math.floor(Math.random() * 30) + 1; // Random day between 1 and 30
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
    const randomMonthIndex = Math.floor(Math.random() * 12); // Random month index between 0 and 11
    const randomYear = today.getFullYear();
    const hours = Math.floor(Math.random() * 12) + 1; // Random hour between 1 and 12
    const minutes = Math.floor(Math.random() * 60); // Random minute between 0 and 59
    const ampm = Math.random() < 0.5 ? "AM" : "PM"; // Randomly choose AM or PM
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${formattedHours}.${formattedMinutes} ${ampm}, ${randomDay} ${monthNames[randomMonthIndex]} ${randomYear}`;
  };

  const accordions = [
    { title: "Outing schedule for every department", dateTime: randomDateTime() },
    { title: "Meeting HR Department", dateTime: randomDateTime() },
    { title: "IT Department need two more talents for UX/UI Designer position", dateTime: randomDateTime() },
    { title: "Meeting Frontend Team", dateTime: randomDateTime() },
    { title: "Task Submission deadline", dateTime: randomDateTime() },
  ];

  const handleClick = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  const handlePinClick = (index) => {
    const newPinnedItems = [...pinnedItems];
    if (newPinnedItems.includes(index)) {
      newPinnedItems.splice(newPinnedItems.indexOf(index), 1);
    } else {
      newPinnedItems.push(index);
    }
    setPinnedItems(newPinnedItems);
  };

  const isPinned = (index) => pinnedItems.includes(index);

  return (
    <div
      style={{
        border: "1px solid #E0E0E0",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#fff", // Set the background color here
      }}
    >
      <h4 style={{ fontSize: "15px" }}>Announcement</h4>
      {showAll
        ? accordions.map((accordion, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#FFFFFF", // Set the background color for each notification tab
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="body1" style={{ fontSize: "15px" }}>{accordion.title}</Typography>
                <Typography variant="body2" style={{ fontSize: "15px" }}>{accordion.dateTime}</Typography>
              </div>
              <div>
                <IconButton
                  aria-label="pin"
                  onClick={() => handlePinClick(index)}
                  color={isPinned(index) ? "primary" : "default"}
                >
                  {isPinned(index) ? <PushPinIcon /> : <PushPinOutlinedIcon />}
                </IconButton>
                <IconButton aria-label="more">
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          ))
        : accordions.slice(0, 3).map((accordion, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#F7F7F7", // Set the background color for each notification tab
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="body1" style={{ fontSize: "15px" }}>{accordion.title}</Typography>
                <Typography variant="body2" style={{ fontSize: "15px" }}>{accordion.dateTime}</Typography>
              </div>
              <div>
                <IconButton
                  aria-label="pin"
                  onClick={() => handlePinClick(index)}
                  color={isPinned(index) ? "primary" : "default"}
                >
                  {isPinned(index) ? <PushPinIcon /> : <PushPinOutlinedIcon />}
                </IconButton>
                <IconButton aria-label="more">
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          ))}
      <Button
        onClick={handleClick}
        sx={{ width: "100%", bgcolor: "white", color: "#FF5151" }}
      >
        {showAll ? "Show Less" : "See All Announcement"} {/* Change button text based on showAll state */}
      </Button>
    </div>
  );
}
