import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setup.css';
import Header from './Header';  // Import the Header component

function Setup() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 11;  // Updated to 11 steps
  const navigate = useNavigate();

  const getStepType = (step) => {
    if ([1, 2, 4, 5, 6, 7, 11].includes(step)) return 'host';
    if ([3, 8].includes(step)) return 'referee';
    if ([9, 10].includes(step)) return 'player';
    return 'general'; // This shouldn't be reached, but it's here as a fallback
  };

  const currentStepType = getStepType(currentStep);

  const hasMultipleImages = (step) => {
    return [2, 3, 4, 8, 10].includes(step);  // Added step 2 to this list
  };

  const getStepImages = (step) => {
    if (hasMultipleImages(step)) {
      return [`${step}-1.png`, `${step}-2.png`];
    }
    return [`${step}.png`];
  };

  const getInstructionsForStep = (step) => {
    switch(step) {
      case 1:
        return (
          <>
            <i>To test the app, at least 3 people are required.</i><br /><br />
            First, the <i>Host</i> should press <i>Create Game</i>.<br /><br />
            If you accidentally closed the app,<br/> press <i>Resume Game</i> to continue.
          </>
        );
      case 2:
        return (
          <>
            Choose <i>Standard Mode</i> <br />for events with stations and full features.<br /><br />
            Choose <i>Points Only Mode</i> <br />for team-based events with score tracking only.<br /><br />
            The <i>Game Code</i> will appear at the top of the screen.<br />
            <u>Share the game code with your Referees</u>.
          </>
        );
      case 3:
        return (
          <>
            <i>Referees</i> should enter the <i>Game Code</i> provided from the host and name.<br /><br />
            After pressing <i>Join</i>, referees will have to wait until the Host finishes the setup.
          </>
        );
      case 4:
        return (
          <>
            Host can now add <i>Stations</i> and their information.<br />
            <i>Station names</i> and their assigned <i>Referees</i> are required. <u>Ensure the number of Stations matches the number of Referees</u>.<br /><br />
            <i>PVP</i> stands for Player vs Player,<br /><i>PVE</i> stands for Player vs Environment.<br />
            Choose PVP if the Station involves competition between <u>two teams</u>,<br /> choose PVE if it's a challenge for a <u>single team</u>.
          </>
        );
      case 5:
        return (
          <>
            <i>Station Time</i>: Duration each team spends at a station. <u>Make sure all stations have the same time.</u> <br /><br />
            <i>Moving Time</i>: Interval for teams to move between stations.<br /><br />
            <i>Rounds</i>: Number of stations each team will visit.<br /><br />
            Enter the correct <i>Number of Teams</i> participating.

          </>
        );
      case 6:
        return (
          <>
            The <i>Matching System</i> is a key feature of this app. It allows you to adjust the order of teams, with potential conflicts highlighted by color. <br /><br />
            Note that the Stations may be displayed in a different order than initially entered. For more information, press the ? button on top or click <span className="clickable-link" onClick={handleMatchingClick}>Features</span>.
          </>
        );
      case 7:
        return (
          <>
            The <i>Host</i> has completed the setup process.<br /><br />
            Please review all details carefully.<br />
            Once confirmed, setup <strong>cannot be modified</strong>.
          </>
        );
      case 8:
        return (
          <>
            The <i>Referees</i> will be able toe see the left screen.<br />
            Once the event <i>starts</i>, they will be able to see the right screen.
          </>
        );
      case 9:
        return (
          <>
            <i>Players</i> will now be able to join the game.<br />
            Please share the <i>Game Code</i> with them.
          </>
        );
      case 10:
        return (
          <>
            The Leader of the team should <i>Create Team</i> while others <i>Join Team</i>.<br /><br />
            The Leader selects the team name and icon. <u>The team number should be assigned in advance by <i>Host</i></u>.<br /><br />
            Made a mistake? No problem!<br />Just leave and rejoin or create a new team.
          </>
        );
      case 11:
        return (
          <>
            By clicking <i>Game Start</i>, the event will begin.<br /><br />
            Enjoy the game and explore our <span className="clickable-link" onClick={handleMatchingClick}>Features</span> for the full experience!<br /><br />
          </>
        );
      default:
        return `Instructions for ${getStepType(step)} Step ${step}`;
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleProgressBarClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const clickedStep = Math.ceil((x / rect.width) * totalSteps);
    setCurrentStep(clickedStep);
  };

  const handleMatchingClick = () => {
    navigate('/features', { state: { selectedFeature: 'matching' } });
  };

  return (
    <div className="Setup">
      <Header />
      <div className="Setup-content">
        <div className="Setup-labels">
          <img 
            src={process.env.PUBLIC_URL + `/png/buttons/${currentStepType === 'player' ? 'Selected' : ''}PlayerButton.png`} 
            alt="Player" 
            className="Setup-button"
          />
          <img 
            src={process.env.PUBLIC_URL + `/png/buttons/${currentStepType === 'referee' ? 'Selected' : ''}RefereeButton.png`} 
            alt="Referee" 
            className="Setup-button"
          />
          <img 
            src={process.env.PUBLIC_URL + `/png/buttons/${currentStepType === 'host' ? 'Selected' : ''}HostButton.png`} 
            alt="Host" 
            className="Setup-button"
          />
        </div>
        <div className="Setup-main-content">
          <button className="Setup-arrow prev" onClick={handlePrevStep} disabled={currentStep === 1}>&#8592;</button>
          <div className={`Setup-step-container ${hasMultipleImages(currentStep) ? 'multiple-images' : ''}`}>
            {getStepImages(currentStep).map((image, index) => (
              <img 
                key={index}
                src={process.env.PUBLIC_URL + `/png/steps/${image}`} 
                alt={`Step ${currentStep} - Image ${index + 1}`} 
                className="Setup-step-image"
              />
            ))}
          </div>
          <div className={`${hasMultipleImages(currentStep) ? 'Setup-instructions-v2' : 'Setup-instructions'}`}>
            <p>{getInstructionsForStep(currentStep)}</p>
          </div>
          <button className="Setup-arrow next" onClick={handleNextStep} disabled={currentStep === totalSteps}>&#8594;</button>
        </div>
        <div className="Setup-progress-bar" onClick={handleProgressBarClick}>
          <div 
            className="Setup-progress"
            style={{width: `${(currentStep / totalSteps) * 100}%`}}
          ></div>
          {[...Array(totalSteps)].map((_, index) => (
            <div 
              key={index}
              className="Setup-progress-step"
              style={{left: `${((index + 1) / totalSteps) * 100}%`}}
            ></div>
          ))}
        </div>
        <div className="Setup-step-label">Step {currentStep} - {getStepType(currentStep).charAt(0).toUpperCase() + getStepType(currentStep).slice(1)}</div>
      </div>
    </div>
  );
}

export default Setup;
