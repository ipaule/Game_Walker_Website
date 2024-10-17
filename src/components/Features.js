import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <div>
      <h1>Features</h1>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <Link to="/" state={{ from: '/features' }}>Back to Home</Link>
    </div>
  );
}

export default Features;
