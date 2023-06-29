// src/pages/Page2.jsx
import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import axios from 'axios';


/*function SignIn_Page() {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Connection</p>
      <SignIn />
    </div>
  );
}

export default SignIn_Page;*/

function SignIn_Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });

      // La connexion a réussi, faire quelque chose avec les données utilisateur
      console.log(response.data);
      sessionStorage.setItem('user',JSON.stringify(response.data));
    } catch (error) {
      // Une erreur s'est produite lors de la connexion
      console.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default SignIn_Page;