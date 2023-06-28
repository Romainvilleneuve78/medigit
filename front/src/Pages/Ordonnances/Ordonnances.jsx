import './Ordonnances.css';
import React from 'react';
import Component1 from '../../components/test';

function Page2() {
  return (
    <div class='ordonnances'>
      <div class='title'>
        <h1>MY PRESCRIPTIONS</h1>
        <button class = "trier">Trier<img src="../../images/barres.png" alt="icone des points"></img></button>
        <button class = "filtrer">Filtrer<img src="../../images/barres.png" alt="icone des points"></img></button> 
      </div>

      

      <Component1/>
      <Component1/>
      <Component1/>
      <Component1/>
      <Component1/>





    </div>

  );
}

export default Page2;
