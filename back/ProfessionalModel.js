const express = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'solution_factory',
});

// Modèle Professional
class Professional {
    constructor(user_id, Specialisation, Activity_adress, City, Description) {
      this.user_id = user_id;
      this.Specialisation = Specialisation;
      this.Activity_adress = Activity_adress;
      this.City = City;
      this.Description = Description;
    }
  
    updateProfessional() {
      const query = "UPDATE Professional SET Specialisation = ?, Activity_adress = ?, City = ?, Description = ? WHERE user_id = ?";
      const values = [this.Specialisation, this.Activity_adress, this.City, this.Description, this.user_id];
  
      return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results.affectedRows);
          }
        });
      });
    }
}

function findProfessionalById(user_id) {
  const query = "SELECT * FROM Professional JOIN user on professional.user_id = user.idUser WHERE user_id = ?";

  return new Promise((resolve, reject) => {
    connection.query(query, [user_id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]); // Renvoyer le premier professional correspondant trouvé
        } else {
          reject(new Error("Professional non trouvé"));
        }
      }
    });
  });
}

function findProfessionalByIdProf(idProfessional) {
  const query = "SELECT * FROM Professional JOIN user on professional.user_id = user.idUser WHERE idProfessional = ?";

  return new Promise((resolve, reject) => {
    connection.query(query, [idProfessional], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]); // Renvoyer le premier professional correspondant trouvé
        } else {
          reject(new Error("Professional non trouvé"));
        }
      }
    });
  });
}


module.exports = {
    Professional,
    findProfessionalById,
    findProfessionalByIdProf
};