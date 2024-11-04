import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ActivityForm from './components/ActivityForm';
import { Container, Typography } from '@mui/material';

function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Fitness Challenge Tracker
      </Typography>
      <ActivityForm addActivity={addActivity} />
      <Dashboard activities={activities} />
    </Container>
  );
}

export default App;
