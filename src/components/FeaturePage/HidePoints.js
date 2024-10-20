import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/HidePoints.png',
];

const explanation = `
  The Hide Points feature allows the host to control the visibility of scores.

  • Toggle point visibility by sliding the "HIDE" button.
  • While the host and referees can see the points, players cannot see the points.
  • The rankings will remain as the same as before hiding the points.

  This feature adds an element of surprise and can help maintain engagement throughout the game.
`;

function HidePoints() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Hide Points Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with other components */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Hide Points" 
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

export default HidePoints;
