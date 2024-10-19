import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/png/features/Matching1.gif',
  '/png/features/Matching2.gif',
  '/png/features/Matching3.gif',
  '/png/features/Matching4.gif',
];

const explanations = [
  "Explanation for Matching 1",
  "Explanation for Matching 2",
  "Explanation for Matching 3",
  "Explanation for Matching 4",
];

function Matching() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Container alignItems="center" maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center">
        Matching Feature
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <IconButton onClick={handlePrevious} color="primary">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <Box display="flex" justifyContent="center">
            <img
              src={images[currentIndex]}
              alt={`Matching ${currentIndex + 1}`}
              style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1">
            {explanations[currentIndex]}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleNext} color="primary">
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Matching;
