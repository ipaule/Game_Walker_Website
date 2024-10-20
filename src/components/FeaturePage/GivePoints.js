import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/GivePoints1.png',
  '/png/features/GivePoints2.png',
  '/png/features/GivePoints3.png',
];

const explanation = `
  The Give Points feature allows referees to award points to teams during the game.

  • Easily select teams and input points
  • Points are immediately updated and visible to all players
  • Helps maintain an accurate and fair scoring system

  This feature ensures that team performances are properly recognized and recorded throughout the event.
`;

function GivePoints() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Give Points Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Give Points 1" 
              style={{ width: '50%', height: 'auto', maxWidth: '400px' }} 
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <img 
                  src={images[1]} 
                  alt="Give Points 2" 
                  style={{ width: '100%', height: 'auto', maxWidth: '200px' }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <img 
                  src={images[2]} 
                  alt="Give Points 3" 
                  style={{ width: '100%', height: 'auto', maxWidth: '200px' }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          {/* Right space for consistency */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line', marginTop: '20px' }}>
            {explanation}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GivePoints;
