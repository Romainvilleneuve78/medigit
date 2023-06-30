// src/pages/Page2.jsx
import './Ordonnances.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
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

export default Page2;*/


const Page2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:3000/prescription/list')
    axios.get('http://localhost:3000/prescription/list')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      {data.map(prescription => (
        <tr key={prescription.idPrescription}>
          <td><h2>{prescription.Name}</h2>
          <p>Jusqu'au: {prescription.Date_validity}</p>
          {/* Afficher d'autres informations utilisateur*/}</td>
        </tr>
      ))}
    </table>
  );
};

export default Page2;