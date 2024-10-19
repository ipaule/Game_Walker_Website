import React from 'react';
import { Grid, Typography } from '@mui/material';

const images = [
  '/png/features/GivePoints1.png',
  '/png/features/GivePoints2.png',
  '/png/features/GivePoints3.png',
];

function GivePoints() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Give Points Feature
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={image} alt={`Give Points ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GivePoints;
