import React, { useState, useEffect } from 'react';
import './LaunchScreen.css';

function LaunchScreen({ onFinish }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [fadeState, setFadeState] = useState('out');
  const images = ['Launching_Let.png', 'Launching_There.png', 'Launching_Be.png', 'Launching_Light.png'];

  useEffect(() => {
    const startSequence = () => {
      setTimeout(() => {
        setCurrentImageIndex(0);
        setFadeState('in');
      }, 1000);
    };

    if (currentImageIndex === -1) {
      startSequence();
    } else {
      const nextImageTimer = setTimeout(() => {
        if (currentImageIndex >= images.length - 1) {
          // All images shown, wait 0.4 seconds before starting fade out
          setTimeout(() => {
            setFadeState('out');
            // Wait for fade out animation to complete before calling onFinish
            setTimeout(onFinish, 1300); // 1.3 seconds for fade out
          }, 80);
        } else {
          setCurrentImageIndex(prevIndex => prevIndex + 1);
          setFadeState('in');
        }
      }, 600); // Increased from 500 to 600 to account for slower fade-in

      return () => {
        clearTimeout(nextImageTimer);
      };
    }
  }, [currentImageIndex, images.length, onFinish]);

  return (
    <div className={`launch-screen ${fadeState === 'out' ? 'fade-out' : ''}`}>
      <div className="launch-images-container">
        {images.map((image, index) => (
          <img 
            key={image}
            src={`${process.env.PUBLIC_URL}/png/${image}`}
            alt={`Launch ${index + 1}`} 
            className={`launch-image ${
              index <= currentImageIndex ? 'fade-in' : 'fade-out'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default LaunchScreen;
