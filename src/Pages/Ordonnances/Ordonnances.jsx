// src/pages/Page2.jsx
import './Ordonnances.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ordo from '../../components/ordo';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes


// const Ordonnance = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // axios.get('http://localhost:3000/prescription/list')
//     axios.get('http://localhost:3000/prescription/list')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <table>
//       {data.map(prescription => (
//         <tr key={prescription.idPrescription}>
//           <td><h2>{prescription.Name}</h2>
//           <p>Jusqu'au: {prescription.Date_validity}</p>
//           {/* Afficher d'autres informations utilisateur*/}</td>
//         </tr>
//       ))}
//     </table>
//   );
// };

// export default Ordonnance;




function Ordonnance() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // axios.get('http://localhost:3000/prescription/list')
  //   axios.get('http://localhost:3000/prescription/list')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);


  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Récupérer l'ID de l'utilisateur à partir du sessionStorage
    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData.idUser;

    // Effectuer une requête GET à votre API
    fetch(`http://localhost:3000/prescription/user?idUser=${idUser}`)
      .then(response => response.json())
      .then(data => {
        // Mettre à jour l'état avec les résultats des prescriptions
        setPrescriptions(data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des prescriptions :', error);
      });
  }, []);

  return (
    <>
      <div className='header_ordo_extend'>
          <div className='fond'>
            <div className='txt'>
              <MenuPage/>
              <h1>Mes ordonnances</h1>
              <div className='btn_class'>
                <button className = "trier">Trier<img src="../../images/barres.png" alt="icone des points"></img></button>
                <button className = "filtrer">Filtrer<img src="../../images/barres.png" alt="icone des points"></img></button>
              </div>
            </div>
            <img src='../../images/medecin3.png'></img>
          </div>

        </div>

      <div className='ordonnances'>
      
      <table style={{width:'100%'}}>
        <tbody>
          {prescriptions.map(prescription => (
            <tr key={prescription.idPrescription}>
              <td>
                {/* <h2>{prescription.Name}</h2>
                <p>Jusqu'au: {prescription.Date_validity}</p> */}
                <div className='container_ordo'> 

                  <button className= "pdp_ordo"> 
                  <Link to="/Profil_pro">
                    {/* <a href="/Profil_pro"> */}
                      <img src="../../images/pdp.png" alt="icone des points"></img>
                    </Link>
                    {/* </a> */}
                  <span className= "title_ordo">{prescription.Professional}</span></button>

                  <div className='info_ordo'>
                          <div className="Name_ordo">
                              {/* <h2><Link to="/Ordopdf">{prescription.Name}</Link></h2> */}
                              {/* <h2><Link to={`/Ordopdf/${prescription.idPrescription}`}>{prescription.Name}</Link></h2> */}
                              <h2><Link to={`/Ordopdf/${prescription.idPrescription}`}>{prescription.Name}</Link></h2>

                              <p className="my-paragraph1">Valide jusqu'au {prescription.Date_validity}</p>
                              <p className="my-paragraph2">Médicament prescrit: {prescription.Medicine}</p>
                          </div>

                          <div className='option_ordo'>
                              <button className= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                              {/* <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button> */}
                              <button className= "poubelle"> <img src="../../images/poubelle-de-recyclage.png" alt="icone de poubelle"></img></button>

                          </div>
                  </div>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>





      </div>
    </>
  );
}

export default Ordonnance;