import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/Timer.png',
];

const explanation = `
  The Timer feature helps manage the game's timing efficiently.

  • Displays the remaining time for the current station activity
  • Shows the time left for teams to move between stations
  • Automatically switches between activity and moving times
  • Press the circle to look at the current round and the total time.

  This feature helps keep the game on schedule and well-paced
`;

function Timer() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Timer Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with other components */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Timer" 
              style={{ width: '100%', height: 'auto', maxWidth: '400px' }} 
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
            {explanation}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {/* Right space for consistency with other components */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Timer;
