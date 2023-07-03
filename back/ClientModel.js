const express = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'solution_factory'
});

// Modèle Client
class Client {
    constructor(user_id, n_secu, Adress, City) {
      this.user_id = user_id;
      this.n_secu = n_secu;
      this.Adress = Adress;
      this.City = City;
    }
  
    updateClient() {
      const query = "UPDATE Client SET n_secu = ?, Adress = ?, City = ? WHERE user_id = ?";
      const values = [this.n_secu, this.Adress, this.City, this.user_id];
  
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

module.exports = {
    Client
};