// src/pages/Page1.jsx
import React from 'react';
import './Accueil.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import MenuPageHome from '../../components/menuHome';


function Home() {

  return (
    <>
      <div class='header_extend'>
        <div class='fond'>

          <div class='txt'>
            <div class='title'>
              <h1>MeDigit</h1>
              <h2>votre nouvelle plateforme de santé</h2>
            </div>
            <MenuPageHome/>
          </div>
          <img src='../../images/medecin.png'></img>
        </div>
        
      </div>
      
    
      <div class='help'>
        <h1>Comment ca marche ?</h1>
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
