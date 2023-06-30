import './Ordonnances.css';
import React from 'react';
import Ordo from '../../components/ordo';
import MenuPage from '../../components/menu';

function Ordonnance() {
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

        <Ordo/>
        <Ordo/>
        <Ordo/>
        <Ordo/>
        <Ordo/>





      </div>
    </>
  );
}

export default Ordonnance;
