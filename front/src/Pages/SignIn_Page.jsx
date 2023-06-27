// src/pages/Page2.jsx
import React from 'react';
import SignIn from '../components/SignIn';
import { Link } from 'react-router-dom';
import "./Sign.css"

function SignIn_Page() {
  return (
    <div>

      <h1 class="title">Sign In</h1>

      <SignIn />
      
    </div>
  );
}

export default SignIn_Page;
