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
      <div className='header_extend'>
        <div className='fond'>
          <div className='txt'>
            <div className='title'>
              <h1>MeDigit.</h1>
              <h2>Votre nouvelle plateforme de santé</h2>
            </div>
            <MenuPageHome/>
          </div>
          <img src='../../images/medecin.png'></img>
        </div>
      </div>
    
      <div id='expl' className='help'>
        <h1>Comment ça marche ?</h1>
        <div className='division'>
          <div className='picture'>
            <img src="../../images/Ordonnance-electronique.png"></img>
          </div>

          <div className='explication'>
            <div className='steps'>
              <div className='step'>1</div>
              <div className='description'>Créez votre compte MeDigit</div>
            </div>
            <div className='steps'>
              <div className='step'>2</div>
              <div className='description'>Enregistrez vos informations personnelles</div>
            </div>
            <div className='steps'>
              <div className='step'>3</div>
              <div className='description'>Accédez directement à vos ordonnances personnelles</div>
            </div>
            <div className='steps'>
              <div className='step'>4</div>
              <div className='description'>Partagez une plateforme commune avec votre médecin </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id='sign' className='myspace'>
        <div className='links'>
          <h1>Votre espace Personnel</h1>
          <nav>
            <div className='btn'>
              <Link to="/SignIn_Page">
                <div className='a'>Vous connecter</div>
              </Link>
            </div>
            <div className='btn'>
             
           
            <Link to="/SignUp_Page"> <button className="b" onClick={handleCreateAccountClick}>Créer un compte</button></Link>
            </div>
            
            
          </nav>
        </div>
      </div>
    </>
  );
}

export default Accueil;