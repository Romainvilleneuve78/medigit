// src/pages/Page2.jsx
import React, { useState } from 'react';
// import SignIn from '../../components/SignIn';
import './SignIn.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';




function SignIn_Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Ajoutez un état pour gérer la connexion réussie
  const navigate = useNavigate(); // Use the useNavigate hook for redirection
  const [error, setError] = useState(''); // State variable to store the error message


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
      setLoggedIn(true); // Mettez à jour l'état pour indiquer que l'utilisateur est connecté
      navigate('/Accueil'); // Redirect the user to the home page


      // Rediriger vers la page d'accueil après la connexion réussie
      // history.push('/Accueil');
    } catch (error) {
      // Une erreur s'est produite lors de la connexion
      console.error(error.response.data.error);
      setError("L'adresse mail ou le mot de passe sont incorrecte"); // Set the error message state
    }
  };

  if (loggedIn) {
    // Si l'utilisateur est connecté, redirigez-le vers la page d'accueil
    // return <Redirect to="/Accueil" />;
  }

  return (
    <>
      <div class='header_sign'>
        <div class='fond'>
          <h1>Me conntecter à mon espace</h1>
          <img src='../../images/mon-espace.png'></img>
        </div>
      </div>

      <div className="sign">
        
        <form onSubmit={handleLogin}>
          {error && <div className="error">{error}</div>} {/* Conditionally render the error message */}
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

          <button type="submit" className='center-button'>Login</button>

          

          <div className="pass">
            <Link to="/SignUp_Page"><div className='pass'>Créer un compte</div></Link>
          </div>
        </form>


      </div>
    </>
  );
}

export default SignIn_Page;