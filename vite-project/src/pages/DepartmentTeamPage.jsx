import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const DepartmentPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Department
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              HR Department
            </Typography>
            <Typography variant="body1">
            What is an HR department? In simplest terms, the HR (Human Resources) department is a group who is responsible for managing the employee life cycle (i.e., recruiting, hiring, onboarding, training, and firing employees) and administering employee benefits.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              IT Department
            </Typography>
            <Typography variant="body1">
            IT departments are responsible for managing the organization's critical apps and communication systems, conferencing. IT departments ensure that these systems are available and reliable, and that they are secured against hacking and other cyber threats.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Add more department sections here if needed */}
      </Grid>
    </Box>
  );
};

export default DepartmentPage;
