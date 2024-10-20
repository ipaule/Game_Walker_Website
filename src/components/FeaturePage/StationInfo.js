import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/StationInfo.png',
];

const explanation = `
  The Station Info feature shows details about each game station.

  For players:
  • See info about current and next stations
  • Helps prepare for activities

  For referees:
  • Quick reference for station rules
  • Useful if they forget station details

  This feature keeps everyone informed during the game.
`;

function StationInfo() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Station Info Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with Matching.js */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Station Info" 
              style={{ width: '65%', height: 'auto', maxWidth: '400px' }} 
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
            {explanation}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {/* Right space for consistency with Matching.js */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default StationInfo;
