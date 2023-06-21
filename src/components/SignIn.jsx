import React, { useState } from 'react';
import connection from './db';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Établir une connexion à la base de données
    connection.connect((err) => {
      if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
      }
      
      console.log('Connexion à la base de données réussie !');
      
      // Exécuter une requête SQL pour vérifier les informations d'identification de l'utilisateur
      const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
      connection.query(query, (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'exécution de la requête :', error);
          return;
        }
        
        if (results.length > 0) {
          console.log('Authentification réussie !');
          // Effectuez ici les actions appropriées en cas de connexion réussie
        } else {
          console.log('Échec de l\'authentification. Email ou mot de passe incorrect.');
          // Effectuez ici les actions appropriées en cas d'échec de connexion
        }
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
