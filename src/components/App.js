import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Setup from './Setup';
import Features from './Features';
import People from './People';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  );
}

export default App;
