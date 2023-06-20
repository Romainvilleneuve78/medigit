// src/pages/Page1.jsx
import Filter from '../../components/Filter';
import './Rappels.css';
import React from 'react';

function Page4() {
  return (
    <div>
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

export default Page4;