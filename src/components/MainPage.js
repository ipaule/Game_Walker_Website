import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LaunchScreen from './LaunchScreen';
import Setup from './Setup';
import './App.css';
function MainPage() {
  const location = useLocation();
  
  const [showNotification, setShowNotification] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });
  const [currentStep, setCurrentStep] = useState(() => {
    return parseInt(localStorage.getItem('currentStep')) || 1;
  });

  const [showLaunchScreen, setShowLaunchScreen] = useState(() => {
    const comingFromInternalPage = ['/setup', '/features', '/people'].includes(location.state?.from);
    return !comingFromInternalPage;
  });

  const totalSteps = 20;

  useEffect(() => {
    localStorage.setItem('showLaunchScreen', showLaunchScreen);
  }, [showLaunchScreen]);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep);
  }, [currentStep]);
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
      setTimeout(() => setShowNotification(false), 5000);
    } else {
      window.open(appStoreUrl, '_blank');
    }
  };

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
    if (section === 'setup') {
      setCurrentStep(1);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection('home');
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const clickPercentage = clickPosition / progressBarWidth;
    const newStep = Math.ceil(clickPercentage * totalSteps);
    setCurrentStep(newStep);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'setup':
        return (
          <Setup 
            currentStep={currentStep}
            totalSteps={totalSteps}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            handleProgressBarClick={handleProgressBarClick}
          />
        );
      default:
        return (
          <>
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
          </>
        );
    }
  };

  if (showLaunchScreen) {
    return <LaunchScreen onFinish={handleLaunchScreenFinish} />;
  }

  return (
    <div>
      <header className="App-header">
        <a href="#" onClick={handleLogoClick}>
          <img src={process.env.PUBLIC_URL + '/png/GameWalkerLogo.png'} className="App-logo" alt="Game Walker logo" />
        </a>
        <nav className="App-nav">
          <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyle: 'none', padding: 0 }}>
            <li><a href="#" onClick={handleDownloadClick}>Download</a></li>
            <li><a href="#setup" onClick={(e) => handleNavClick('setup', e)}>Setup</a></li>
            <li><a href="#features" onClick={(e) => handleNavClick('features', e)}>Features</a></li>
            <li><a href="#people" onClick={(e) => handleNavClick('people', e)}>People</a></li>
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
      <main className="App-main">
        <div className="App-content">
          {renderContent()}
        </div>
      </main>
      {showNotification && (
        <div className="notification">
          We apologize, but Game Walker is currently only available for iOS devices. We appreciate your interest and hope to support more platforms in the future!
        </div>
      )}
    </div>
  );
}

export default MainPage;
