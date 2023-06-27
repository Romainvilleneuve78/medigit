// src/pages/Page1.jsx
import React from 'react';
import './Accueil.css'
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import SignIn_Page from '../SignIn_Page'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import SignUp_Page from '../SignUp_Page';


function Home() {

  return (
    <>
      <h1 class='accueil'>BIENVENUE SUR MEDIGIT...</h1>
      <div class='help'>
        <div class='division'>
          <div class='picture'>
            < img src="../../images/Ordonnance-electronique.png"></img>
          </div>

          <div class= 'explication'>
            
            <div class = 'steps'>
              <div class='step'>1</div>
              <div class='description'>Créez votre compte MeDigit.</div>
            </div>
            <div class = 'steps'>
              <div class='step'>2</div>
              <div class='description'>Enregistrez vos informations personnels.</div>
            </div>
            <div class = 'steps'>
              <div class='step'>3</div>
              <div class='description'>Accedez directement à vos ordonnances personnelles.</div>
            </div>
            <div class = 'steps'>
              <div class='step'>4</div>
              <div class='description'>Personnalisés vos rappels pour une vie plus tranquille.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class='myspace'>
        <div class='links'>
          <h1>Votre espace Personnel</h1>
          <nav>
            <div class='btn'><Link to="/SignIn_Page"><div class='a'>Vous connecter</div></Link></div>
            <div class='btn'><Link to="/SignUp_Page"><div class='a'>Creer un compte</div></Link></div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Home;
