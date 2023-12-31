// src/pages/Page1.jsx
import React from 'react';
import './Profil.css';



function Page4() {
  return (
    <div>
      <h1 class="titre">Mon Profil </h1>
      <div class="container">
        <div class="left">
          <img src="../../images/DRNOZMAN.jpeg" width="250"></img>
        </div>
        <div class="right">
          <h2 class="name">DR.NOZMAN</h2>
          <h3 class="travail">Gynécologue</h3>
          <p class="info"> - Basé à Paris, 7 boulevard des caniveaux 75014</p>
          <p class="info"> - Ouvert du Mardi au Samedi de 9h à 18h</p>
          <div class="container">
            <div class="left">
              <h4 class="contact">Contact</h4>
              <p class="info">Phone : +33 1 45 65 78 29</p>
              <p class="info">Standard : +33 6 24 12 36 87</p>
              <p class="info">Email : Nozmam.doc@docdoc.com</p>
            </div>
            <div class="right">
              <h4 class="contact">Signature électrique</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
