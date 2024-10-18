import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setup.css';
import Header from './Header';  // Import the Header component

function Setup() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 20;
  const navigate = useNavigate();

  const isHostStep = currentStep === 1; // Add more steps here if needed

  const getInstructionsForStep = (step) => {
    switch(step) {
      case 1:
        return (
          <>
            First, the <strong>Host</strong> should hit <strong>Create Game</strong>.<br />
            If you accidentally closed the app, you can hit <strong>Resume Game</strong>.
          </>
        );
      // Add cases for steps 2-20
      default:
        return `Instructions for Step ${step}`;
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
            src={process.env.PUBLIC_URL + '/png/PlayerButton.png'} 
            alt="Player" 
            className="Setup-button"
          />
          <img 
            src={process.env.PUBLIC_URL + '/png/RefereeButton.png'} 
            alt="Referee" 
            className="Setup-button"
          />
          <img 
            src={process.env.PUBLIC_URL + (isHostStep ? '/png/SelectedHostButton.png' : '/png/HostButton.png')} 
            alt="Host" 
            className="Setup-button"
          />
        </div>
        <div className="Setup-main-content">
          <button className="Setup-arrow prev" onClick={handlePrevStep} disabled={currentStep === 1}>&#8592;</button>
          <div className="Setup-step-container">
            <img 
              src={process.env.PUBLIC_URL + `/png/steps/${currentStep}.png`} 
              alt={`Step ${currentStep}`} 
              className="Setup-step-image"
            />
          </div>
          <div className="Setup-instructions">
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
        <div className="Setup-step-label">Step {currentStep}</div>
      </div>
    </div>
  );
}

export default Setup;
