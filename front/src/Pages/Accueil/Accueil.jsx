// src/pages/Page1.jsx
import React from 'react';
import './Accueil.css'
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import SignIn_Page from '../SignIn_Page'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import SignUp_Page from '../SignUp_Page';


function Page1() {

  return (
    <>
      <div class='help'>
        <div class='division'>
          <div class='picture'>
            < img src="../../images/Ordonnance-electronique.png"></img>
          </div>

          <div class= 'explication'>
            <h1>MeDigit en quelques étapes </h1>
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
        <div class='division'>
          <div class='link'>
            
          </div>

          <div class= 'picture'>
            
          </div>
        </div>
      </div>
      

    <nav>
      <Link to="/SignIn_Page">Sign In</Link>
      <Link to="/SignUp_Page">Sign Up</Link>
    </nav>
    <Routes> {/* Remplacez le composant Route par Routes */}
      <Route path="/SignIn_Page" element={<SignIn_Page />} />
      <Route path="/SignUp_Page" element={<SignUp_Page />} />
    </Routes>
    </>
  );
}

export default Page1;
