// src/pages/Page2.jsx
import './Ordonnances.css';
import React from 'react';
import Component1 from '../../components/test';

function Page2() {
  return (
    <div class='ordonnances'>
      <h1>MY PRESCRIPTIONS</h1>
      <div  class =  "bouton">
         <button class = "trier">
            Trier
            <img src="../../images/barres.png" alt="icone des points"></img>
          </button>    
         <button class = "filtrer">
          Filtrer
          <img src="../../images/barres.png" alt="icone des points"></img></button> <br/>
      </div>
      <br/>
      <br/>
      <br/>

      < Component1/>
      <Component1/>
      <Component1/>
      <Component1/>
      <Component1/>
          


      
      
    </div>

  );
}

export default Page2;
