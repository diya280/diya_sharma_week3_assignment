import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const Dashboard = ({ activities }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
        {activities.length > 0 ? 'Daily Activities' : ''}
      </Typography>
      <Grid container spacing={3}>
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: '#f0f4c3',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  {activity.date}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: 14 }}>
                  <strong>Steps:</strong> {activity.steps}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: 14 }}>
                  <strong>Calories Burned:</strong> {activity.calories}
                </Typography>
                <Typography sx={{ mt: 1, fontSize: 14 }}>
                  <strong>Workout Time:</strong> {activity.time} mins
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
