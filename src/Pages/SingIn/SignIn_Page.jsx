// src/pages/Page2.jsx
import React, { useState } from 'react';
// import SignIn from '../../components/SignIn';
import './SignIn.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';




function SignIn_Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory(); // Instanciez useHistory

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

      // Rediriger vers la page d'accueil après la connexion réussie
      // history.push('/Accueil');
    } catch (error) {
      // Une erreur s'est produite lors de la connexion
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="log">
      <h1 className='titleSign'>Sign In</h1>
      
      <form onSubmit={handleLogin} className='form'>
        {/* <label> */}
          {/* Email: */}
          <input
            type="email"
            value={email}
            placeholder='Entrez votre email'
            onChange={(e) => setEmail(e.target.value)}
            className='txt_field'
          />
        {/* </label> */}
        <br />
        {/* <label>
          Password: */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='txt_field'
            placeholder='Entrez votre mot de passe'
          />
        {/* </label> */}
        <br />
        <button type="submit" className='center-button'>Login</button>

        <div className="pass">
          <Link to="/SignUp_Page"><div className='pass'>Créer un compte</div></Link>

        </div>
      </form>


    </div>
  );
}

export default SignIn_Page;