import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box, Container } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  null, // No image for the initial explanation screen
  '/png/features/Matching1.gif',
  '/png/features/Matching2.gif',
  '/png/features/Matching3.gif',
  '/png/features/Matching4.gif',
];

const explanations = [
  {
    content: <>
      <br/>The Matching System optimizes team rotations across stations.<br/><br/>
      It allows manual team position adjustments with real-time conflict feedback.<br/>
      Color-coding highlights different conflict types, helping create balanced rotations.<br/><br/>
      Press two teams to swap positions. Long press a team to manually edit its number.<br/><br/>
      The following screens will explore these conflict types and their representations.
    </>
  },
  {
    title: "Duplicated Appearance",
    content: <>
      Teams appearing twice in the same round are highlighted in <span style={{ color: 'purple' }}><i>purple</i></span>, indicating an error.<br/><br/>
      Example: Swapping teams 4 and 5 might cause team 4 to appear twice in a round, shown as an impossible configuration.
    </>
  },
  {
    title: "Duplicated Station",
    content: <>
      <br/>Teams appearing twice in the same station are highlighted in <span style={{ color: 'yellow' }}><i>yellow</i></span>, indicating an error.<br/><br/>
      Example: Swapping teams 4 and 5 might cause team 4 to appear twice in a station, shown a team is going to play twice in the same station.
    </>
  },
  {
    title: "Duplicated Opponents",
    content: <>
      <br/>On PVP stations, teams that face each other twice are highlighted in <span style={{ color: 'blue' }}><i>blue</i></span>, indicating a potential issue.<br/><br/>
      Example: Swapping teams 4 and 6 might cause teams 3 and 4 to compete against each other twice, which could reduce variety and excitement for the participants.
    </>
  },
  {
    title: "Duplicated Error",
    content: <>
      <br/>When there are any multiple errors occurring on a team, the team is highlighted in <span style={{ color: 'red' }}><i>red</i></span>, indicating a critical issue.<br/><br/>
      Example: Team 1 has two errors: appearing twice in the same round and in the same station.<br/><br/>
    </>
  },
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
      <Grid container spacing={2} alignItems="center" style={{ minHeight: '40vh' }}>
        <Grid item xs={1}>
          <IconButton onClick={handlePrevious} color="primary">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        {currentIndex === 0 ? (
          <Grid item xs={10}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <Typography variant="body1" align="left">
                {explanations[currentIndex].content}
              </Typography>
            </Box>
          </Grid>
        ) : (
          <>
            <Grid item xs={5}>
              <Box display="flex" justifyContent="center">
                <img
                  src={images[currentIndex]}
                  alt={`Matching ${currentIndex}`}
                  style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6" gutterBottom>
                {explanations[currentIndex].title}
              </Typography>
              <Typography variant="body1">
                {explanations[currentIndex].content}
              </Typography>
            </Grid>
          </>
        )}
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
