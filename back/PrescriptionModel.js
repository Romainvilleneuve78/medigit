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


module.exports = {list_prescription};