import React, { useState } from 'react';
import Header from './Header';
import { Button, Grid, Box, Container } from '@mui/material';
import './Features.css';

import Announcement from './FeaturePage/Announcement';
import AwardsHidden from './FeaturePage/AwardsHidden';
import GivePoints from './FeaturePage/GivePoints';
import HidePoints from './FeaturePage/HidePoints';
import Matching from './FeaturePage/Matching';
import StationInfo from './FeaturePage/StationInfo';
import Timer from './FeaturePage/Timer';

const buttonData = [
  { name: 'Announcement', color: '#F6C1C1', Component: Announcement },
  { name: 'Awards Hidden', color: '#FFE2BE', Component: AwardsHidden },
  { name: 'Give Points', color: '#FFFDE2', Component: GivePoints },
  { name: 'Hide Points', color: '#E9F6D7', Component: HidePoints },
  { name: 'Matching', color: '#C9E9EE', Component: Matching },
  { name: 'Station Info', color: '#D2CCF4', Component: StationInfo },
  { name: 'Timer', color: '#F6C1C1', Component: Timer },
];

function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleButtonClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <Box 
      className="Features" 
      sx={{ 
        backgroundColor: selectedFeature ? selectedFeature.color : 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h1>Features</h1>
        
        <Box sx={{ mb: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {buttonData.map((button) => (
              <Grid item key={button.name}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(button)}
                  className={`feature-button ${selectedFeature === button ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: button.color,
                    color: '#000000',
                    border: selectedFeature === button ? '2px solid #000000' : 'none'
                  }}
                >
                  {button.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {selectedFeature && (
          <Box className="feature-component-container" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <selectedFeature.Component />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Features;
