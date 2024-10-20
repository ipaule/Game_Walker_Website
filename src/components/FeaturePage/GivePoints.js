import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/GivePoints.png',
];

const explanation = `
  The Give Points feature lets the host and referees quickly add points to teams.

  • If the referee presses "WIN" button,
  the points of the station is automatically added to the team.
  • If the referee presses "LOSE" button,
  the team's points will remain the same.
  • Referees and the Host can also manually give or deduct bonus points by pressing the team icon.

  This feature lets teams get points fast and makes the game fun with surprise bonus points.
`;

function GivePoints() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Give Points Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with other components */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Give Points" 
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

export default GivePoints;
