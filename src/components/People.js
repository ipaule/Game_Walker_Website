import React from 'react';
import { Link } from 'react-router-dom';

function People() {
  return (
    <div>
      <h1>Our Team</h1>
      <ul>
        <li>Person 1</li>
        <li>Person 2</li>
        <li>Person 3</li>
      </ul>
      <Link to="/" state={{ from: '/people' }}>Back to Home</Link>
    </div>
  );
}

export default People;
