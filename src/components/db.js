// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1', // Remplacez par l'hôte de votre base de données
  user: 'root', // Remplacez par votre nom d'utilisateur MySQL
  password: 'password', // Remplacez par votre mot de passe MySQL
  database: 'MEDEGIT' // Remplacez par le nom de votre base de données
});

module.exports = connection;