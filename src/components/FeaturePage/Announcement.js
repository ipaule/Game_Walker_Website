import React from 'react';
import { Grid, Typography } from '@mui/material';

const images = [
  '/png/features/Announcement1.png',
  '/png/features/Announcement2.png',
  '/png/features/Announcement3.png',
];

function Announcement() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Announcement Feature
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img src={image} alt={`Announcement ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Announcement;
