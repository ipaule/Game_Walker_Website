import React, { useState, useEffect } from 'react';
import './LaunchScreen.css';

const images = [
  'LaunchingBe.png',
  'LaunchingLet.png',
  'LaunchingLight.png',
  'LaunchingThere.png'
];

function LaunchScreen({ onFinish }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(imageInterval);
        setFadeOut(true);
        setTimeout(onFinish, 1300); // Wait for fade out animation to complete
      }
    }, 1000);

    return () => clearInterval(imageInterval);
  }, [currentImageIndex, onFinish]);

  return (
    <div className={`launch-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="launch-images-container">
        {images.map((image, index) => (
          <img
            key={image}
            src={process.env.PUBLIC_URL + '/png/' + image}
            alt={`Launch screen ${index + 1}`}
            className={`launch-image ${index === currentImageIndex ? 'fade-in' : ''} ${image === 'LaunchingBe.png' ? 'launching-be' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LaunchScreen;
