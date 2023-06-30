import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../../components/SignUp';

//fonction updateProfessional
function SignUp_Page() {
    const [specialisation, setSpecialisation] = useState('');
    const [activityAdress, setActivityAdress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Récupérer l'id de l'utilisateur à partir du sessionStorage
      const userId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).idUser : null;
  
      // Vérifier si l'id de l'utilisateur est disponible
      if (!userId) {
        console.log('Id utilisateur non trouvé dans le sessionStorage');
        return;
      }
  
      // Construire l'objet de données à envoyer dans la requête
      const data = {
        user_id: userId,
        Specialisation: specialisation,
        Activity_adress: activityAdress,
        City: city,
        Description: description
      };
  
      // Effectuer la requête de mise à jour du professionnel
      fetch('http://localhost:3000/professional/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            console.log('Mise à jour du professionnel réussie');
            // Faire quelque chose en cas de réussite, par exemple, afficher un message de succès ou rediriger vers une autre page
          } else {
            console.log('Erreur lors de la mise à jour du professionnel');
            // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
          }
        })
        .catch(error => {
          console.log('Erreur lors de la mise à jour du professionnel:', error);
          // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Spécialisation:
          <input type="text" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} />
        </label>
        <br />
        <label>
          Adresse d'activité:
          <input type="text" value={activityAdress} onChange={(e) => setActivityAdress(e.target.value)} />
        </label>
        <br />
        <label>
          Ville:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Mettre à jour</button>
      </form>
    );
  }
  
  export default SignUp_Page;