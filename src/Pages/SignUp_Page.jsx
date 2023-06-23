// src/pages/Page2.jsx
import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
function SignUp_Page() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Enregistrez-vous</p>
      <SignUp />
      <Link to="/client">Client</Link>
      <Link to="/medecins">Médecins</Link>
    </div>
  );
}

export default SignUp_Page;
