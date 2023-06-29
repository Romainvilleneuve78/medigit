<<<<<<< HEAD
import './Ordonnances.css';
import React from 'react';
import Component1 from '../../components/test';
import MenuPage from '../../components/menu';

function Page2() {
  return (
    <>
      <div class='header_ordo_extend'>
          <div class='fond'>
            <div class='txt'>
              <MenuPage/>
              <h1>Mes ordonnances</h1>
              <div className='btn_class'>
                <button class = "trier">Trier<img src="../../images/barres.png" alt="icone des points"></img></button>
                <button class = "filtrer">Filtrer<img src="../../images/barres.png" alt="icone des points"></img></button>  
              </div>
            </div>
            <img src='../../images/medecin3.png'></img>
          </div>
          
        </div>

      <div class='ordonnances'>

        <Component1/>
        <Component1/>
        <Component1/>
        <Component1/>
        <Component1/>





      </div>
    </>
  );
}

export default Page2;
=======
// src/pages/Page2.jsx
import './Ordonnances.css';
import React from 'react';

function Page2() {
  return (
    <div>
      <h1 className="titleOrdo">MY PRESCRIPTIONS</h1>

      <button class = "trier">Trier</button>     <button class = "filtrer">Filtrer</button> <br/>

      <br/>
      <br/>
      <br/>

      

      
      <div class="containerOrdo">
      <h2 className='titleOrdo2'>Gynecology Consultation</h2>         
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
>>>>>>> main
