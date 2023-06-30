// src/pages/Page2.jsx
import React from 'react';
import SignUp from '../components/SignUp';
import '../components/Sign.css';
import Client from '../components/Client';
import Medecin from '../components/Medecin';

function SignUp_Page() {
  return (
    <div>
      <div class="title">Sign Up</div>
      <Medecin />
    </div>
  );
}

export default SignUp_Page;
