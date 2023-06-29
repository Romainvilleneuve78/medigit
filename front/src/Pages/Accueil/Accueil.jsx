// src/pages/Page1.jsx
import React from 'react';
import './Accueil.css'
<<<<<<< HEAD
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
=======
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import SignIn_Page from '../SignIn_Page'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import SignUp_Page from '../SignUp_Page';
function Page1() {

  const slides = [
    {
      id: 1,
      imageUrl: '../../../images/banniere1.jpeg',
      title: 'Première image',
      description: 'Description de la première image',
    },
    {
      id: 2,
      imageUrl: '../../../images/banniere2.jpeg',
      title: 'Deuxième image',
      description: 'Description de la deuxième image',
    },
    // Ajoutez plus de diapositives selon vos besoins
  ];

  return (
    <>
      <div class='Carousel'>
        <div class='item'>
          <div class='slide1'></div>
        </div>
      </div>
      <h1>Accueil</h1>
      <p>Mode d'emploi de l'utilisation du site web et comment obtenir une ordonnance</p>

<nav>

  <Link to="/SignIn_Page">Sign In</Link>
  <Link to="/SignUp_Page">Sign Up</Link>
</nav>
<Routes> {/* Remplacez le composant Route par Routes */}
  <Route path="/SignIn_Page" element={<SignIn_Page />} />
  <Route path="/SignUp_Page" element={<SignUp_Page />} />
  
</Routes>
>>>>>>> main
    </>
  );
}

<<<<<<< HEAD
export default Home;
=======
export default Page1;
>>>>>>> main
