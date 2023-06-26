// src/pages/Page2.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Client_Page() {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Je suis un client </p>
      <Link to="/medecins">Médecins</Link>
    </div>
  );
}

export default Client_Page;