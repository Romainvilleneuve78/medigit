import './Ordonnances.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ordo from '../../components/ordo';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Ordonnance() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [filter, setFilter] = useState('');
  const [user, setUser] = useState({});


  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData.idUser;

    fetch(`http://localhost:3000/prescription/user?idUser=${idUser}`)
      .then(response => response.json())
      .then(data => {
        setPrescriptions(data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des prescriptions :', error);
      });
  }, []);

  useEffect(() => {
    if (prescriptions.length > 0) {
      const idProfessional = prescriptions[0].Professional; // Utilisez le bon accès aux données pour obtenir l'ID du professionnel
  
      axios.get(`http://localhost:3000/professional/idprof/${idProfessional}`) // Utilisez l'URL avec idprof pour récupérer les informations de l'utilisateur
        .then(response => {
          setUser(response.data);
          console.log(user);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des informations du professionnel :', error);
        });
    }
  }, [prescriptions]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className='header_ordo_extend'>
        <div className='fond'>
          <div className='txt'>
            <MenuPage />
            <h1>Mes ordonnances</h1>
            <div className='btn_class'>
              <button className="trier">Trier<img src="../../images/barres.png" alt="icone des points"></img></button>
              <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Filtrer par nom de prescription"
              />
            </div>
          </div>
          <img src='../../images/medecin3.png' alt="Image du médecin" />
        </div>
      </div>

      <div className='ordonnances'>
        <table style={{ width: '100%' }}>
          <tbody>
            {filteredPrescriptions.map(prescription => (
              <tr key={prescription.idPrescription}>
                <td>
                  <div className='container_ordo'>
                    <button className="pdp_ordo">
                      <Link to={`/Profil_pro/${user.user_id}`}>
                        <img src="../../images/pdp.png" alt="icone des points" />
                      </Link>
                    <span className="title_ordo">{user.FirstName} {user.LastName}</span></button>

                    <div className='info_ordo'>
                      <div className="Name_ordo">
                        <h2><Link to={`/Ordopdf/${prescription.idPrescription}`}>{prescription.Name}</Link></h2>
                        <p className="my-paragraph1">Valide jusqu'au {prescription.Date_validity}</p>
                        <p className="my-paragraph2">Médicament prescrit: {prescription.Medicine}</p>
                      </div>

                      <div className='option_ordo'>
                        <button className="coeur"> <img src="../../images/coeur.png" alt="icone du bouton" /></button>
                        <button className="poubelle"> <img src="../../images/poubelle-de-recyclage.png" alt="icone de poubelle" /></button>
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