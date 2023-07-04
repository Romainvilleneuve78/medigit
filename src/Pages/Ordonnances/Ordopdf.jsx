import React, { useState, useEffect } from 'react';
import './Ordopdf.css';
import DownloadPDF from '../../components/PDF/MyDocument';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Ordopdf() {
  const { idPrescription } = useParams();
  const [prescriptionData, setPrescriptionData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/prescription/${idPrescription}`)
      .then((response) => {
        setPrescriptionData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching prescription data:', error);
      });
  }, [idPrescription]);

  const handleDeletePrescription = () => {
    axios
      .delete(`http://localhost:3000/prescription/delete/${prescriptionData.idPrescription}`)
      .then((response) => {
        // Suppression réussie, vous pouvez mettre en œuvre les actions supplémentaires si nécessaire
        console.log('Prescription supprimée avec succès');
      })
      .catch((error) => {
        console.error('Error deleting prescription:', error);
      });
  };

  if (!prescriptionData) {
    return <div>Loading... </div>;
  }

  const med = prescriptionData.Medicine.split(',');
  const descr = prescriptionData.Description.split(',');

  const result = [];
  const maxLength = Math.max(med.length, descr.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < med.length) {
      result.push(med[i].trim());
    }
    if (i < descr.length) {
      result.push(descr[i].trim());
    }
  }

  return (
    <>
      <div className='header_ordo_extend'>
        <div className='fond'>
          <div className='txt'>
            <MenuPage />
            <h1>Mes ordonnances</h1>
          </div>
          <img src='../../images/medecin3.png' alt="Image du médecin" />
        </div>
      </div>

      <div className='ordopdf'>

        <div className='titlepdf'>
          <h1>{prescriptionData.Name}</h1>
          <button className='pdp_ordopdf'>
            <img src='../../images/pdp.png' alt='icone des points'></img>
            <span className='title_ordo'>
              {prescriptionData.ProfessionalFirstName} {prescriptionData.ProfessionalLastName}
            </span>
          </button>
        </div>

        <div className='container_ordo'>
          <div className='info_ordo'>
            <div className='Name_ordo'>
              <h2>Consultation {prescriptionData.Specialisation}</h2>

              <div className='id_ordo'>
                <p className='my-paragraph4'>
                  {prescriptionData.Name} -
                </p>
                <p className='my-paragraph5'>
                  ID: {prescriptionData.idPrescription}
                </p>
              </div>

              <p className='my-paragraph1'>
                Le {prescriptionData.Date_creation}
              </p>

              <p className='my-paragraph2'>
                Valide jusqu'au {prescriptionData.Date_validity}
              </p>

              <h3>
                {prescriptionData.ClientFirstName} {prescriptionData.ClientLastName}
              </h3>

              <p className='my-paragraph3'>
                ID: {prescriptionData.Clientid}
              </p>

              <div className='Med'>
                {result.map((item, index) => (
                  <li key={index} className={index % 2 === 0 ? 'medoc' : 'frequence_prise'}>
                    {item}
                  </li>
                ))}
              </div>
            </div>

            <div className='option_ordo'>
              <button className='coeur'>
                <img src='../../images/coeur.png' alt='icone du bouton'></img>
              </button>
              <button className='points'>
                <img src='../../images/petitspoints.png' alt='icone des points'></img>
              </button>
            </div>

          </div>
        </div>

      <div className='bouton_ordo'>
        <button className='downloadpdf'>
          <DownloadPDF />
        </button>

        <button onClick={handleDeletePrescription}>Supprimer</button>
      </div>

    </div>
  </>
);
}

export default Ordopdf;