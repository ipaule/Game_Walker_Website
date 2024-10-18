import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import LaunchScreen from './LaunchScreen';
import Header from './Header';  // Import the Header component

function MainPage() {
  const [showLaunchScreen, setShowLaunchScreen] = useState(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    console.log('Has visited:', hasVisited);
    return hasVisited !== 'true';
  });
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('showLaunchScreen changed:', showLaunchScreen);
    if (!showLaunchScreen) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [showLaunchScreen]);

  useEffect(() => {
    console.log('Initial showLaunchScreen state:', showLaunchScreen);
  }, []);

  const handleLaunchScreenFinish = useCallback(() => {
    console.log('LaunchScreen finished');
    setShowLaunchScreen(false);
  }, []);

  useEffect(() => {
    if (!showLaunchScreen) {
      document.body.classList.add('main-screen');
    }
  }, [showLaunchScreen]);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    const appStoreUrl = 'https://apps.apple.com/us/app/game-walker/id6476948969?l=ko';
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      window.location.href = appStoreUrl;
    } else if (isAndroid) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    } else {
      window.open(appStoreUrl, '_blank');
    }
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  const resetLaunchScreen = () => {
    sessionStorage.removeItem('hasVisited');
    setShowLaunchScreen(true);
  };

  if (showLaunchScreen) {
    console.log('Rendering LaunchScreen');
    return <LaunchScreen onFinish={handleLaunchScreenFinish} />;
  }

  console.log('Rendering main content');
  return (
    <div className="App main-screen">
      <Header />  {/* Add the Header component here */}
      <main className="App-main">
        <div className="App-content">
          <div className="App-icon-container">
            <img src={process.env.PUBLIC_URL + '/png/AppIcon.png'} className="App-icon" alt="Game Walker App Icon" />
          </div>
          <div className="App-description">
            <h1>Game Walker</h1>
            <p>
              The best event utility app for preparation. Ideal for large group meetings such as:
            </p>
            <ul>
              <li>Church retreats</li>
              <li>Company workshops</li>
            </ul>
            <p>
              Game Walker streamlines your event organization, making it easier than ever to manage participants and keep track of activities.
            </p>
            <button className="download-button" onClick={handleDownloadClick}>Download Now</button>
          </div>
        </div>
      </main>
      {showNotification && (
        <div className="notification">
          We apologize, but Game Walker is currently only available for iOS devices. We appreciate your interest and hope to support more platforms in the future!
        </div>
      )}
      <button onClick={resetLaunchScreen} style={{position: 'fixed', bottom: '10px', right: '10px'}}>
        Reset Launch Screen
      </button>
    </div>
  );
}

export default MainPage;
