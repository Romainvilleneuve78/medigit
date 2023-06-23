// src/pages/Page1.jsx
import React from 'react';
import './Accueil.css'
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import SignIn_Page from '../SignIn_Page'
import Client_Page from '../Client_Page';




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
      <div className='decription'>
      <h1 >Découvrer comment récupérer votre ordonnace </h1>
      <ul>
        <li> Élément 1</li>

        <li>Élément 2</li>
        <li>Élément 3</li>
        <li>Élément 3</li>
      </ul>
      </div>
<nav>
 


  <Link to="/SignIn_Page" className="button-signup">Sign In</Link>
  <Link to="/SignUp_Page" className="button-signup">Sign Up</Link>
</nav>
<Routes> {/* Remplacez le composant Route par Routes */}
  <Route path="/SignIn_Page" element={<SignIn_Page />} />
  <Route path="/SignUp_Page" element={<SignUp_Page />} />
  <Route path="/Client_Page" element={<Client_Page/>} />
  
  
</Routes>
    </>
  );
}

export default Page1;
