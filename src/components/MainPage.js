import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LaunchScreen from './LaunchScreen';
import './App.css';

function MainPage() {
  const location = useLocation();
  
  const [showNotification, setShowNotification] = useState(false);

  const [showLaunchScreen, setShowLaunchScreen] = useState(() => {
    const comingFromInternalPage = ['/setup', '/features', '/people'].includes(location.state?.from);
    return !comingFromInternalPage;
  });

  const handleLaunchScreenFinish = useCallback(() => {
    setShowLaunchScreen(false);
  }, []);

  useEffect(() => {
    if (!showLaunchScreen) {
      document.body.classList.add('main-screen');
    }
    return () => {
      document.body.classList.remove('main-screen');
    };
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
    <div>
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/png/GameWalkerLogo.png'} className="App-logo" alt="Game Walker logo" />
        <nav className="App-nav">
          <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', padding: 0 }}>
            <li><a href="#" onClick={handleDownloadClick}>Download</a></li>
            <li>
              <Link to="/setup">Setup</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
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

export default MainPage;
