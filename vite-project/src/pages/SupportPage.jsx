import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SupportPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Support request submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>

      <Typography variant="body1" gutterBottom>
        If you have any questions or need assistance, please fill out the form below and we'll get back to you as soon as possible.
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '15px' }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '15px' }}
        />

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          style={{ marginBottom: '15px' }}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SupportPage;
