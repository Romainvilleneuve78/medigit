import React, { useState, useEffect } from 'react';
import './AddOrdo.css'
import FormOrdo from '../../components/FormOrdo/FormOrdo';
import axios from 'axios';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import MyDocument from '../../components/PDF/MyDocument';
//import { Document, Page, Text, View } from '@react-pdf/renderer';

//import ReactPDF from '@react-pdf/renderer'

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
/*
function AddOrdo() {
    const [formulaires, setFormulaires] = useState([]);

    const ajouterFormulaire = () => {
        setFormulaires([...formulaires, <FormOrdo key={formulaires.length} />]);
    };

    const genererPDF = () => {
        // const ReactPDF = require('@react-pdf/renderer');
        const fs = require('fs');
        const path = require('path');

        const MyDocument = () => (
            <ReactPDF.Document>
                <ReactPDF.Page>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </ReactPDF.Page>
            </ReactPDF.Document>
        );

        const pdfPath = path.join(__dirname, 'example.pdf');
        ReactPDF.render(<MyDocument />, pdfPath, () => {
            // Manipulation supplémentaire après la génération du PDF (facultatif)
            console.log('PDF généré avec succès !');
        });
    };

    
        return (
            <>
                <div class="add_ordo">
                    

                <div class='formulaire'>

                    <form class='id_secu' action="/action_page.php">
                        <label for="id_secu">Patient Numero securité sociale :</label>
                        <input type="text" id="id_secu" name="id_secu" className='id_secu'></input>
                        <button type="submit">Valider</button>
                    </form>

                    <div className="prescription">
                        <FormOrdo />
                        {formulaires.map((formulaire) => formulaire)}
                    </div>

                    <button onClick={ajouterFormulaire}>Ajouter un médicament</button>
                    <button type="submit" onClick={genererPDF}>Créer l'ordonnance</button>

                </div>
            </div>
        </>
    );
}

export default AddOrdo;*/


const AddOrdo = () => {
    const [professional, setProfessional] = useState(null);
  const [prescriptionData, setPrescriptionData] = useState({
    Name: '',
    n_secu: '',
    Professional: '',
    Medicine: '',
    Description: '',
  });
  const [medicine, setMedicine] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProfessional = async () => {
      try {
        const sessionData = JSON.parse(sessionStorage.getItem('user'));
        const user_id = sessionData.idUser;
        console.log(user_id)

        const response = await axios.get(`http://localhost:3000/professional/${user_id}`);
        setProfessional(response.data);
        setPrescriptionData((prevData) => ({
          ...prevData,
          Professional: response.data.idProfessional,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfessional();
  }, []);

  const handleInputChange = (e) => {
    setPrescriptionData({
      ...prescriptionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMedicine = () => {
    setPrescriptionData((prevData) => ({
      ...prevData,
      Medicine: prevData.Medicine ? `${prevData.Medicine},${medicine}` : medicine,
      Description: prevData.Description ? `${prevData.Description},${description}` : description,
    }));
    setMedicine('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuer la requête POST vers http://localhost:3000/prescription/add
    fetch('http://localhost:3000/prescription/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prescriptionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse de la requête POST:', data);
        // Réinitialiser le formulaire après la soumission
        setPrescriptionData({
          Name: '',
          n_secu: '',
          Professional: '',
          Medicine: '',
          Description: '',
        });
      })
      .catch((error) => {
        console.error('Erreur lors de la requête POST:', error);
      });
  };

  if (!professional) {
    return <div>Loading...</div>;
  }

  
    return (
      <>
        <div className='header_ordo_extend'>
          <div className='fond'>
            <div className='txt'>
              <MenuPage />
              <h1>Nouvelles ordonnance</h1>
            </div>
            <img src='../../images/ambulance.png' alt="Image du médecin" />
          </div>
        </div>

        <div className='add_ordo'>

            <form onSubmit={handleSubmit}>

              <div className='division'>

                <div className='ajouter_ordo'>
                  <h2>Ajouter une prescription</h2>
                  <input type="text" placeholder='Prescription' value={medicine} onChange={(e) => setMedicine(e.target.value)} />
                  <input type="text" placeholder='Informations complémentaires' value={description} onChange={(e) => setDescription(e.target.value)} style={{paddingBottom:'4vw',}} />
                  <button type="button" onClick={handleAddMedicine}>Ajouter</button>
                </div>

              <div className='ordo'>
                <h1>Ordonnance</h1>
                <div className='info_1'>
                  <label>Numero securité sociale du patient:</label>
                  <input type="text" name="n_secu" placeholder='112242522822' value={prescriptionData.n_secu} onChange={handleInputChange} />
                </div>
                <div className='title'>
                  <h2>Symptomes :</h2>
                  <input type="text" name="Name" value={prescriptionData.Name} onChange={handleInputChange} />
                </div>

                <ul>
                  {prescriptionData.Medicine.split(',').map((medicine, index) => (
                    <li key={index}>
                      <strong>Prescription :</strong> {medicine}
                      <br /><strong>Informations complémentaires :</strong> {prescriptionData.Description.split(',')[index]}
                    </li>
                    
                  ))}
                </ul>
                  
                <button type="submit">Créer</button>
                
              </div>
            
              </div>
              
              
        
              
            </form>
        </div>
      </>
    );
  };
  
  export default AddOrdo;
 