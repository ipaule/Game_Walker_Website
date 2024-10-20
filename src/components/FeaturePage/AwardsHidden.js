import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const images = [
  '/png/features/AwardsHidden.png',
];

const explanation = `
  The Awards Hidden feature allows the host to keep top 3 teams a surprise until the end of the event.

  • Under 3rd place, teams are revealed automatically after the host presses the "END GAME" button.
  • Keeps participants engaged and excited throughout the event
  • Allows for a grand reveal at the end of the game

  This feature adds an element of anticipation and excitement to the game's conclusion.
`;

function AwardsHidden() {
  return (
    <Container alignItems="center" maxWidth="lg" style={{ marginTop: '7px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Awards Hidden Feature
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          {/* Left space for consistency with other components */}
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img 
              src={images[0]} 
              alt="Awards Hidden" 
              style={{ width: '50%', height: 'auto', maxWidth: '400px' }} 
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

export default AwardsHidden;
