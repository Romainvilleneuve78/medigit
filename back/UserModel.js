const express = require('express');
const mysql = require('mysql');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'solution_factory'
});

// Modèle User
class User {
  constructor(FirstName, LastName, Sex, Birthdate, Phone, Fix, Email, Kind, Password) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Sex = Sex;
    this.Birthdate = Birthdate;
    this.Phone = Phone;
    this.Fix = Fix;
    this.Email = Email;
    this.Kind = Kind;
    this.Password = Password;
  }

  createUser() {
    const query = "INSERT INTO User (FirstName, LastName, Sex, Birthdate, Phone, Fix, Email, Kind, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [this.FirstName, this.LastName, this.Sex, this.Birthdate, this.Phone, this.Fix, this.Email, this.Kind, this.Password];

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


function list_utilisateurs() {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM user`;
        let query = connection.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
    });
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    user.createUser()
      .then(insertId => {
        console.log('Utilisateur créé avec ID :', insertId);
        resolve(insertId); // Résoudre la promesse avec l'ID de l'utilisateur
      })
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        reject(error); // Rejeter la promesse avec l'erreur
      });
  });
}

function deleteUser(idUser) {
  let table;
  
  return new Promise((resolve, reject) => {
    // Récupérer la valeur de la colonne Kind de l'utilisateur
    const getKindQuery = "SELECT Kind FROM User WHERE idUser = ?";
    connection.query(getKindQuery, [idUser], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          const kind = results[0].Kind;
          
          // Déterminer la table en fonction de la valeur de Kind
          if (kind === 0) {
            table = "Client";
          } else if (kind === 1) {
            table = "Professional";
          } else {
            reject(new Error("Valeur Kind invalide"));
            return;
          }
          
          // Supprimer l'utilisateur de la table appropriée
          const deleteTableQuery = `DELETE FROM ${table} WHERE user_id = ?`;
          connection.query(deleteTableQuery, [idUser], (error, results) => {
            if (error) {
              reject(error);
            } else {
              if (results.affectedRows > 0) {
                // Supprimer l'utilisateur de la table User
                const deleteUserQuery = "DELETE FROM User WHERE idUser = ?";
                connection.query(deleteUserQuery, [idUser], (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    if (results.affectedRows > 0) {
                      resolve("Utilisateur supprimé avec succès");
                    } else {
                      reject(new Error("L'id de l'utilisateur n'a pas été trouvé dans la table User"));
                    }
                  }
                });
              } else {
                reject(new Error(`L'id de l'utilisateur n'a pas été trouvé dans la table ${table}`));
              }
            }
          });
        } else {
          reject(new Error("L'id de l'utilisateur n'a pas été trouvé"));
        }
      }
    });
  });
}

function findUser(idUser) {
  const query = "SELECT * FROM User WHERE idUser = ?";

  return new Promise((resolve, reject) => {
    connection.query(query, [idUser], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results);
        } else {
          reject(new Error("L'id n'a pas été trouvé"));
        }
      }
    });
  });
}

function findUserByProf(idProfessional) {
  const query = "SELECT * FROM user JOIN professional ON user.idUser = professional.user_id WHERE idProfessional = ?";

  return new Promise((resolve, reject) => {
    connection.query(query, [idProfessional], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results);
        } else {
          reject(new Error("L'id n'a pas été trouvé"));
        }
      }
    });
  });
}

function login(email, password) {
  const query = "SELECT * FROM User WHERE Email = ? AND Password = ?";

  return new Promise((resolve, reject) => {
    connection.query(query, [email, password], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]); // Renvoyer le premier utilisateur correspondant trouvé
        } else {
          reject(new Error("Utilisateur non trouvé"));
        }
      }
    });
  });
}


// Exemple d'utilisation
//const user = new User("John", "Doe", "M", "1990-01-01", "123456789", "987654321", "john.doe@example.com", "1", "password");

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion à la base de données réussie !');

  //addUser(user)
  //afficherDonnees("User");

  //findUser(3) .then(results => {console.log(results);}) .catch(error => {console.error(error);});

  //deleteUser(23);

  login("john.doe@example.com", "password")
  .then(user => {
    console.log("Utilisateur connecté :", user);
  })
  .catch(error => {
    console.error(error);
  });
});

function findClientById(idUser) {
  // const query = "SELECT * FROM User WHERE idUser = ?";
  const query = `
  SELECT u.*, 
    c.*,
    c.City AS cityclient,
    p.*,
    p.City AS citypro
  FROM user u
  LEFT JOIN client c ON u.idUser = c.user_id AND u.kind = 0
  LEFT JOIN professional p ON u.idUser = p.user_id AND u.kind = 1
  WHERE u.idUser = ?;`;

  return new Promise((resolve, reject) => {
    connection.query(query, [idUser], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]); // Renvoyer le premier utilisateur correspondant trouvé
        } else {
          reject(new Error("Utilisateur non trouvé"));
        }
      }
    });
    console.log(query);
  });
}

function updateUser(idUser, updatedUser) {
  const { FirstName, LastName, Sex, Birthdate, Phone, Fix, Email} = updatedUser;
  const query = "UPDATE User SET FirstName = ?, LastName = ?, Sex = ?, Birthdate = ?, Phone = ?, Fix = ?, Email = ? WHERE idUser = ?";
  const values = [FirstName, LastName, Sex, Birthdate, Phone, Fix, Email,idUser];

  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.affectedRows > 0) {
          resolve("Utilisateur mis à jour avec succès");
        } else {
          reject(new Error("L'id de l'utilisateur n'a pas été trouvé"));
        }
      }
    });
  });
}



  

  /*
  static loginUser(email, password){
    const query = SELECT id_client, password FROM client WHERE email = ?;
    try {
      connection.query(query, [email])
      .then(results => {
        if (results.length > 0 && password == results[0].password) {
          return results[0].id_client
        } else {
          throw new Error("L'id ou le mot de passe ne sont pas bons");
        }
      })
    } catch (error) {
      throw error
    }
  }
}
*/

module.exports = {
  User,
  list_utilisateurs,
  login,
  addUser,
  findClientById,
  updateUser,
  findUserByProf
};
