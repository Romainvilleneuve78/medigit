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
  const [data, setData] = useState([]);

  useEffect(() => {
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
          {/* Afficher d'autres informations utilisateur */}</td>
        </tr>
      ))}
    </table>
  );
};

export default Page4;