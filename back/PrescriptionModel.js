const express = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'medigit'
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

function getPrescriptionById(idPrescription) {
  // const query = `SELECT * FROM prescription WHERE idPrescription = ?`;
  const query = `
        SELECT
          p.*,
          uc.FirstName AS ClientFirstName,
          uc.LastName AS ClientLastName,
          uc.idUser AS Clientid,
          upr.FirstName AS ProfessionalFirstName,
          upr.LastName AS ProfessionalLastName,
          upr.idUser AS Professionalid
        FROM
            prescription p
        INNER JOIN client c ON p.Client = c.idClient
        INNER JOIN professional pr ON p.Professional = pr.idProfessional
        INNER JOIN user uc ON c.user_id = uc.idUser
        INNER JOIN user upr ON pr.user_id = upr.idUser
        WHERE idPrescription=1;`;
  const values = [idPrescription];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null); // Renvoie null si l'ordonnance n'est pas trouvée
        }
      }
    });
  });
}


module.exports = { list_prescription, getPrescriptionsByUser, getPrescriptionById };