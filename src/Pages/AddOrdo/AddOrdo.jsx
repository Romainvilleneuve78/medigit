import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
const AddOrdo = () => {
    const [prescriptionData, setPrescriptionData] = useState({
      Name: '',
      n_secu: '',
      Professional: '',
      Medicine: '',
      Description: '',
    });
    const [medicine, setMedicine] = useState('');
    const [description, setDescription] = useState('');
  
    const handleInputChange = (e) => {
      setPrescriptionData({
        ...prescriptionData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleAddMedicine = () => {
      setPrescriptionData({
        ...prescriptionData,
        Medicine: prescriptionData.Medicine ? `${prescriptionData.Medicine},${medicine}` : medicine,
        Description: prescriptionData.Description ? `${prescriptionData.Description},${description}` : description,
      });
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
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom :
            <input type="text" name="Name" value={prescriptionData.Name} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Numéro de sécurité sociale :
            <input type="text" name="n_secu" value={prescriptionData.n_secu} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Professionnel :
            <input type="text" name="Professional" value={prescriptionData.Professional} onChange={handleInputChange} />
          </label>
        </div>
  
        <div>
          <h3>Médicaments :</h3>
          <div>
            <label>
              Nom du médicament :
              <input type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} />
            </label>
            <label>
              Description :
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="button" onClick={handleAddMedicine}>Ajouter</button>
          </div>
          <ul>
            {prescriptionData.Medicine.split(',').map((medicine, index) => (
              <li key={index}>
                <strong>Médicament :</strong> {medicine} - <strong>Description :</strong> {prescriptionData.Description.split(',')[index]}
              </li>
            ))}
          </ul>
        </div>
  
        <button type="submit">Valider</button>
      </form>
    );
  };
  
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom :
            <input type="text" name="Name" value={prescriptionData.Name} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Numéro de sécurité sociale :
            <input type="text" name="n_secu" value={prescriptionData.n_secu} onChange={handleInputChange} />
          </label>
        </div>
  
        <div>
          <h3>Médicaments :</h3>
          <div>
            <label>
              Nom du médicament :
              <input type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} />
            </label>
            <label>
              Description :
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="button" onClick={handleAddMedicine}>Ajouter</button>
          </div>
          <ul>
            {prescriptionData.Medicine.split(',').map((medicine, index) => (
              <li key={index}>
                <strong>Médicament :</strong> {medicine} - <strong>Description :</strong> {prescriptionData.Description.split(',')[index]}
              </li>
            ))}
          </ul>
        </div>
  
        <button type="submit">Valider</button>
      </form>
    );
  };
  
  export default AddOrdo;