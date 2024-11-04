import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ActivityForm = ({ addActivity }) => {
  const [form, setForm] = useState({
    date: '',
    steps: '',
    calories: '',
    time: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(form);
    setForm({ date: '', steps: '', calories: '', time: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: '0 auto',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f9f9f9'
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom align="center">
        Add New Activity
      </Typography>
      <TextField
        label="Date"
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        required
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: new Date().toISOString().split("T")[0],
        }}
      />
      <TextField
        label="Steps"
        name="steps"
        value={form.steps}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Calories Burned"
        name="calories"
        value={form.calories}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Workout Time (mins)"
        name="time"
        value={form.time}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <Box display="flex" justifyContent="center" mt={2}>
        <Button type="submit" variant="contained" color="primary" size="large">
          Add Activity
        </Button>
      </Box>
    </Box>
  );
};

export default ActivityForm;
