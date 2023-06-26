// src/pages/Page2.jsx
import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
function SignUp_Page() {
  return (
    <div>
      <h1 class="Title">Sign Up</h1>
      <SignUp />
      <Link to="/client">Client</Link>
      <Link to="/medecins">Médecins</Link>
    </div>

  );
}

export default SignUp_Page;
