import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import LaunchScreen from './LaunchScreen';

function App() {
  const [showLaunchScreen, setShowLaunchScreen] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleLaunchScreenFinish = useCallback(() => {
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
      setTimeout(() => setShowNotification(false), 5000); // Hide notification after 5 seconds
    } else {
      // For desktop computers, redirect to the App Store page
      window.open(appStoreUrl, '_blank');
    }
  };

  if (showLaunchScreen) {
    return <LaunchScreen onFinish={handleLaunchScreenFinish} />;
  }

  return (
    <div className="App main-screen">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/png/GameWalkerLogo.png'} className="App-logo" alt="Game Walker logo" />
        <nav className="App-nav">
          <ul>
            <li><a href="#" onClick={handleDownloadClick}>Download</a></li>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#people">People</a></li>
          </ul>
        </nav>
      </header>
      {showNotification && (
        <div className="notification">
          We apologize, but Game Walker is currently only available for iOS devices. We appreciate your interest and hope to support more platforms in the future!
        </div>
      )}
    </div>
  );
}

export default App;
