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
            First, the <strong>Host</strong> should tap <strong>Create Game</strong>.<br /><br />
            If you accidentally closed the app, tap <strong>Resume Game</strong> to continue.
          </>
        );
      case 2:
        return (
          <>
            Choose <strong>Standard Mode</strong> <br />for events with stations and full features.<br /><br />
            Choose <strong>Points Only Mode</strong> <br />for team-based events with score tracking only.<br /><br />
            The <strong>Game Code</strong> will appear at the top of the screen.<br />
            Share the game code with your <u>Referees</u>.
          </>
        );
      case 3:
        return (
          <>
            <strong>Referees</strong> should enter the <strong>Game Code</strong> provided from the host and name.<br /><br />
            After tapping <u>Join</u>, referees will have to wait until the Host finishes the setup.<br /><br />
          </>
        );
      case 4:
        return (
          <>
            Host can now add <strong>Stations</strong> and their information.<br />
            Station names and their assigned <u>Referees</u> are required. Ensure the <u>number of Stations</u> matches the <u>number of Referees</u>.<br /><br />
            <strong>PVP</strong> stands for Player vs Player,<br /><strong>PVE</strong> stands for Player vs Environment.<br />
            Choose PVP if the Station involves competition between <u>two teams</u>,<br /> choose PVE if it's a challenge for a <u>single team</u>.
          </>
        );
      case 5:
        return (
          <>
            Choose <strong>Standard Mode</strong> <br />for events with stations and full features.<br /><br />
            Choose <strong>Points Only Mode</strong> <br />for team-based events with score tracking only.<br /><br />
            The <strong>Game Code</strong> will appear at the top of the screen.<br />
            Share the game code with your <strong>Referees</strong>.
          </>
        );
      case 6:
        return (
          <>
            <strong>Referees</strong> should enter the <strong>Game Code</strong> provided from the host and name.<br /><br />
            After tapping <strong>Join </strong>, referees will have to wait until the Host finishes the setup.<br /><br />
          </>
        );
      case 7:
        return (
          <>
            First, the <strong>Host</strong> should tap <strong>Create Game</strong>.<br /><br />
            If you accidentally closed the app, tap <strong>Resume Game</strong> to continue.
          </>
        );
      case 8:
        return (
          <>
            Choose <strong>Standard Mode</strong> <br />for events with stations and full features.<br /><br />
            Choose <strong>Points Only Mode</strong> <br />for team-based events with score tracking only.<br /><br />
            The <strong>Game Code</strong> will appear at the top of the screen.<br />
            Share the game code with your <strong>Referees</strong>.
          </>
        );
      case 9:
        return (
          <>
            <strong>Referees</strong> should enter the <strong>Game Code</strong> provided from the host and name.<br /><br />
            After tapping <strong>Join </strong>, referees will have to wait until the Host finishes the setup.<br /><br />
          </>
        );
      case 10:
        return (
          <>
            First, the <strong>Host</strong> should tap <strong>Create Game</strong>.<br /><br />
            If you accidentally closed the app, tap <strong>Resume Game</strong> to continue.
          </>
        );
      case 11:
        return (
          <>
            Choose <strong>Standard Mode</strong> <br />for events with stations and full features.<br /><br />
            Choose <strong>Points Only Mode</strong> <br />for team-based events with score tracking only.<br /><br />
            The <strong>Game Code</strong> will appear at the top of the screen.<br />
            Share the game code with your <strong>Referees</strong>.
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
