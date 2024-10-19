import React from 'react';
import { Grid, Typography } from '@mui/material';

const images = [
  '/png/features/AwardsHidden.png',
];

function AwardsHidden() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Awards Hidden Feature
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={image} alt={`Awards Hidden ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AwardsHidden;
