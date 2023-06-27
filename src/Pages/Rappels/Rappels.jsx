// src/pages/Page1.jsx
import Filter from '../../components/Filter';
import './Rappels.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


/*function Page4() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/user/list')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>Liste des utilisateurs :</h1>
      <ul>
        {users.map(user => (
          <li key={user.idUser}>
            {user.FirstName} {user.LastName}
          </li>
        ))}
      </ul>
      <Filter/>
      <h1 className="titleRappels">MY REMINDERS</h1>
      <br></br>
      <table>
      <tr>
        <td>
          <h2>Reniew your prescription</h2>
          <p>10.05</p>
          <p>Docteur</p>
        </td>
      </tr>
      <br></br>
      <hr></hr>
      <br></br>
      <tr>
        <td>
          <h2>Reniew your prescription</h2>
          <p>10.05</p>
          <p>Docteur</p>
        </td>
      </tr>
      <br></br>
      <hr></hr>
      <br></br>
      <tr>
        <td>
          <h2>Reniew your prescription</h2>
          <p>10.05</p>
          <p>Docteur</p>
        </td>
      </tr>
      </table>
    </div>
  );
}

export default Page4;*/

const Page4 = () => {
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
    <div>
      <h2>Liste des prescriptions</h2>
      <ul>
        {prescriptions.map(prescription => (
          <li key={prescription.id}>{prescription.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page4;