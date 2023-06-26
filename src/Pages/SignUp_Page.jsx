// src/pages/Page2.jsx
import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import './Sign.css'
function SignUp_Page() {
  return (
    <div>
      <h1 class="Title">Sign Up</h1>

      <div class="highlight-button"><Link class="lien" to="/client">Client</Link></div>
      <div class="highlight-button"><Link class="lien" to="/medecins">Médecins</Link></div>

    </div>

  );
}

export default SignUp_Page;
