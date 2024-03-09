import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const randomNames = ["John Doe", "Jane Smith", "Alex Johnson"];

export default function Scheduler({ selectedDateTime }) {
  const [showAll, setShowAll] = useState(false);
  
  // Default date and time value
  const defaultDateTime = { date: "Today", time: "10:00 AM" };

  const randomNames = ["John Doe", "Jane Smith", "Alex Johnson"];

  const accordions = [
    { 
      title: 'Review candidate applications', 
      dateTime: selectedDateTime || defaultDateTime
    },
    { 
      title: 'Interview with candidates', 
      dateTime: selectedDateTime || defaultDateTime 
    },
    { 
      title: 'Short meeting with product designer from IT Department', 
      dateTime: selectedDateTime || defaultDateTime 
    },
    { 
      title: 'Project submission', 
      dateTime: selectedDateTime || defaultDateTime 
    },
    { 
      title: 'Managing the team for frontend', 
      dateTime: selectedDateTime || defaultDateTime 
    }
  ];

  const handleClick = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #E0E0E0', padding: '10px', borderRadius: '10px' }}>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h4>Upcoming Schedule</h4>
          <select style={{ width: '192px', height: '43px', fontSize: '16px', border: 'none' }}>
            {randomNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {showAll ? (
          accordions.map((accordion, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#F7F7F7' }}>
              <div>
                <Typography>{accordion.title}</Typography>
                <Typography variant="caption" sx={{ color: '#666' }}>
                  {`${accordion.dateTime.date} - ${accordion.dateTime.time}`}
                </Typography>
              </div>
              <MoreHorizIcon />
            </div>
          ))
        ) : (
          accordions.slice(0, 3).map((accordion, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#F7F7F7' }}>
              <div>
                <Typography sx={{fontFamily:'Roboto'}}>{accordion.title}</Typography>
                <Typography variant="caption" sx={{ color: '#666' }}>
                  {`${accordion.dateTime.date} - ${accordion.dateTime.time}`}
                </Typography>
              </div>
              <MoreHorizIcon />
            </div>
          ))
        )}
        <Button onClick={handleClick} sx={{ width: '100%', bgcolor: 'white', color: '#FF5151' }}>
          {showAll ? 'Show Less' : 'See All Announcements'} {/* Change button text based on showAll state */}
        </Button>
      </div>
    </div>
  );
}
