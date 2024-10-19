import React from 'react';
import { Grid, Typography } from '@mui/material';

const images = [
  '/png/features/Timer1.png',
  '/png/features/Timer2.png',
  '/png/features/Timer3.png',
];

function Timer() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Timer Feature
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={image} alt={`Timer ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Timer;
