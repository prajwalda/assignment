import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SettingsPage = () => {
  const handleSave = () => {
    // Handle save logic here
    alert('Settings saved!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          General Settings
        </Typography>

        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '15px' }}
        />

        <TextField
          label="Default Timezone"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '15px' }}
        />
      </div>

      <div>
        <Typography variant="h6" gutterBottom>
          Notification Settings
        </Typography>

        <div style={{ marginBottom: '15px' }}>
          <label>
            <input type="checkbox" /> Receive email notifications
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            <input type="checkbox" /> Receive push notifications
          </label>
        </div>
      </div>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Settings
      </Button>
    </div>
  );
};

export default SettingsPage;
