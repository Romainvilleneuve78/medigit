// src/pages/Page2.jsx
import './Ordonnances.css';
import React from 'react';

function Page2() {
  return (
    <div>
      <h1>MY PRESCRIPTIONS</h1>

      <button class = "trier">Trier</button>     <button class = "filtrer">Filtrer</button> <br/>

      <br/>
      <br/>
      <br/>

      

      
      <div class="container">
      <h2>Gynecology Consultation</h2>         
      <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
      </div>


      <p className="my-paragraph1">Valid until 10.02.24</p> <br/> 
 
      <p className="my-paragraph2">To be taken three times a day for two weeks and then once a month for two month</p>
      
      <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>

      <button class= "pdp"> <img src="../../images/pdp.jpg" alt="icone des points"></img></button>

    </div>

  );
}

export default Page2;
