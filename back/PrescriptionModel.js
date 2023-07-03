const express = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'solution_factory'
});

// Modèle Prescription
class Prescription {
    constructor(Name, Client, Professional, Date_creation, Date_validity, Medicine, Description) {
      this.Name = Name;
      this.Client = Client;
      this.Professional = Professional;
      this.Date_creation = Date_creation;
      this.Date_validity = Date_validity;
      this.Medicine = Medicine;
      this.Description = Description;
    }
  
    createUser() {
      const query = "INSERT INTO Prescription (Name, Client, Professional, Date_creation, Date_validity, Medicine, Description) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const values = [this.Name, this.Client, this.Professional, this.Date_creation, this.Date_validity, this.Medicine, this.Description];
  
      return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results.insertId);
          }
        });
      });
    }
  }

  function list_prescription() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM prescription`;
        let query = connection.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
    });
}

function getPrescriptionsByUser(idUser) {
  const query = `
    SELECT * FROM user
    JOIN client ON user.idUser = client.user_id
    JOIN prescription ON client.idClient = prescription.Client
    WHERE user_id = ?`;
  const values = [idUser];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function getPrescriptionsByUserProfessional(idUser) {
  const query = `
    SELECT * FROM user
    JOIN professional ON user.idUser = professional.user_id
    JOIN prescription ON professional.idProfessional = prescription.Professional
    WHERE user_id = ?`;
  const values = [idUser];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function addPrescription(Name, n_secu, Professional, Medicine, Description) {
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 19).replace('T', ' ');
  };

  const getDateInThreeMonths = () => {
    const now = new Date();
    const threeMonthsFromNow = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    return threeMonthsFromNow.toISOString().slice(0, 19).replace('T', ' ');
  };

  return new Promise((resolve, reject) => {
    // Recherche de l'idClient à partir du n_secu
    const getClientIdQuery = "SELECT idClient FROM client WHERE n_secu = ?";
    connection.query(getClientIdQuery, [n_secu], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const clientId = results[0].idClient;
        const currentDate = getCurrentDate();
        const validityDate = getDateInThreeMonths();
        const prescription = new Prescription(Name, clientId, Professional, currentDate, validityDate, Medicine, Description);
        prescription.createUser()
          .then((insertId) => resolve(insertId))
          .catch((error) => reject(error));
      }
    });
  });
}

module.exports = { list_prescription, getPrescriptionsByUser, addPrescription, getPrescriptionsByUserProfessional };