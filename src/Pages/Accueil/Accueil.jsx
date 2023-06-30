import React, { useState } from 'react';
import './Accueil.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuPageHome from '../../components/menuHome';
import { Element } from 'react-scroll';

function Accueil() {
  const [showOptions, setShowOptions] = useState(false);

  const handleCreateAccountClick = () => {
    setShowOptions(!showOptions);
  };

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
    
      <div id='expl' class='help'>
        <h1>Comment ça marche ?</h1>
        <div class='division'>
          <div class='picture'>
            <img src="../../images/Ordonnance-electronique.png"></img>
          </div>

          <div class='explication'>
            <div class='steps'>
              <div class='step'>1</div>
              <div class='description'>Créez votre compte MeDigit.</div>
            </div>
            <div class='steps'>
              <div class='step'>2</div>
              <div class='description'>Enregistrez vos informations personnelles.</div>
            </div>
            <div class='steps'>
              <div class='step'>3</div>
              <div class='description'>Accédez directement à vos ordonnances personnelles.</div>
            </div>
            <div class='steps'>
              <div class='step'>4</div>
              <div class='description'>Personnalisez vos rappels pour une vie plus tranquille.</div>
            </div>
          </div>
        </div>
      </div>
      
      <div id='sign' class='myspace'>
        <div class='links'>
          <h1>Votre espace Personnel</h1>
          <nav>
            <div class='btn'>
              <Link to="/SignIn_Page">
                <div class='a'>Vous connecter</div>
              </Link>
            </div>
            <div class='btn'>
             
            <button class="b" onClick={handleCreateAccountClick}>Créer un compte</button>
            
              {showOptions && (
                <div class='options'>
                  <Link to="/SignUp_Page"><div class='option'>Client</div></Link>
                  <Link to="/SignUp_Page"><div class='option'>Médecin</div></Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Accueil;