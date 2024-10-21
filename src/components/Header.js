import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';  // Make sure this import path is correct

function Header() {
  const navigate = useNavigate();

  const handleDownloadClick = (e) => {
    e.preventDefault();
    const appStoreUrl = 'https://apps.apple.com/us/app/game-walker/id6476948969?l=ko';
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      window.location.href = appStoreUrl;
    } else if (isAndroid) {
      alert("We apologize, but Game Walker is currently only available for iOS devices.");
    } else {
      window.open(appStoreUrl, '_blank');
    }
  };

  const handleNavClick = (e, path) => {
    e.preventDefault(); // Prevent default link behavior
    navigate(path);
  };

  const handleLogoClick = () => {
    // Navigate to the main page without resetting the launch screen
    navigate('/');
  };

  return (
    <header className="App-header">
      <img 
        src={process.env.PUBLIC_URL + '/png/GameWalkerLogo.png'} 
        className="App-logo" 
        alt="Game Walker logo" 
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
      <nav className="App-nav">
        <ul>
          <li><a href="#" onClick={handleDownloadClick}>Download</a></li>
          <li><a href="#" onClick={(e) => handleNavClick(e, '/setup')}>Setup</a></li>
          <li><a href="#" onClick={(e) => handleNavClick(e, '/features')}>Features</a></li>
          <li><a href="#" onClick={(e) => handleNavClick(e, '/people')}>People</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
