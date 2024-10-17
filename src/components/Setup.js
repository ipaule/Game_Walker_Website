import React from 'react';
import { Link } from 'react-router-dom';

function Setup() {
  return (
    <div>
      <h1>Setup Page</h1>
      <p>Here you can find instructions on how to set up our product.</p>
      <ul>
        <li>Step 1: Download the software</li>
        <li>Step 2: Install the software</li>
        <li>Step 3: Configure your settings</li>
        <li>Step 4: Start using the product</li>
      </ul>
      <Link to="/" state={{ from: '/setup' }}>Back to Home</Link>
    </div>
  );
}

export default Setup;
