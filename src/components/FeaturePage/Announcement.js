import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/Announcement.png',
];

const explanation = `
  The Announcement feature allows the host to communicate important information to all participants.

  • Send instant messages to all players and referees
  • Use for game updates, rule changes, or general announcements
  • Helps maintain clear communication throughout the event

  This feature ensures that all participants stay informed and connected during the game.
`;

function Announcement() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Announcement Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with other components */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Announcement" 
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

export default Announcement;
