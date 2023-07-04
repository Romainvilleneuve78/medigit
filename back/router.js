const express = require("express");
const router = express.Router();
router.use(express.json());
var user_model = require('./UserModel');
var prescription_model = require('./PrescriptionModel');
var client_model = require('./ClientModel');
var professional_model = require('./ProfessionalModel');




router.get("/", (req, res) => {
    res.json("API MAX V 0.1");
});



router.get("/user/list", (req, res) => {
    user_model.list_utilisateurs().then(result => {
        console.log("Result received:", result);
        res.send(result);
    }).catch(err => {
        res.send("{error}");
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    user_model.login(email, password)
      .then(user => {
        res.json(user); // Renvoyer l'utilisateur connecté en tant que réponse JSON
      })
      .catch(error => {
        res.status(401).json({ error: error.message }); // Renvoyer une erreur 401 si l'utilisateur n'est pas trouvé ou les identifiants sont incorrects
      });
  });

  router.post('/users/add', (req, res) => {
    const userData = req.body; // Les données de l'utilisateur sont envoyées dans le corps de la requête
  
    // Créer une instance de User avec les données de l'utilisateur
    const user = new user_model.User(
      userData.FirstName,
      userData.LastName,
      userData.Sex,
      userData.Birthdate,
      userData.Phone,
      userData.Fix,
      userData.Email,
      userData.Kind,
      userData.Password
    );
  
    // Appelez la méthode addUser avec l'instance de User
    user_model.addUser(user)
      .then(insertId => {
        res.status(201).json({ message: 'Utilisateur créé avec succès', insertId });
      })
      .catch(error => {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur', details: error.message });
      });
  });


  router.post('/professional/update', (req, res) => {
    const professionalData = req.body;
  
    const professional = new professional_model.Professional(
      professionalData.user_id,
      professionalData.Specialisation,
      professionalData.Activity_adress,
      professionalData.City,
      professionalData.Description
    );
  
    professional.updateProfessional()
      .then(affectedRows => {
        if (affectedRows > 0) {
          res.status(200).json({ message: 'Professional mis à jour avec succès' });
        } else {
          res.status(404).json({ error: 'Professional non trouvé' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du Professional', details: error.message });
      });
  });
  
  router.post('/client/update', (req, res) => {
    const clientData = req.body;
  
    const client = new client_model.Client(
      clientData.user_id,
      clientData.n_secu,
      clientData.Adress,
      clientData.City
    );
  
    client.updateClient() // Utilisez client.updateClient() au lieu de client_model.updateClient(client)
      .then(affectedRows => {
        if (affectedRows > 0) {
          res.status(200).json({ message: 'Client mis à jour avec succès' });
        } else {
          res.status(404).json({ error: 'Client non trouvé' });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du client', details: error.message });
      });
});

router.get("/prescription/list", (req, res) => {
    prescription_model.list_prescription().then(result => {
        console.log("Result received:", result);
        res.send(result);
    }).catch(err => {
        res.send("{error}");
    });
});

router.post("/prescription/add", (req, res) => {
  const { Name, n_secu, Professional, Medicine, Description } = req.body;

  prescription_model.addPrescription(Name, n_secu, Professional, Medicine, Description)
    .then(insertId => {
      res.status(201).json({ message: 'Prescription ajoutée avec succès', insertId });
    })
    .catch(error => {
      res.status(500).json({ error: 'Erreur lors de l\'ajout de la prescription', details: error.message });
    });
});

router.post('/client/update', (req, res) => {
  const clientData = req.body;

  const client = new client_model.Client(
    clientData.user_id,
    clientData.n_secu,
    clientData.Adress,
    clientData.City
  );

  client.updateClient() // Utilisez client.updateClient() au lieu de client_model.updateClient(client)
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).json({ message: 'Client mis à jour avec succès' });
      } else {
        res.status(404).json({ error: 'Client non trouvé' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Erreur lors de la mise à jour du client', details: error.message });
    });
});

router.post('/update/user/:idUser', (req, res) => {
  const idUser = req.params.idUser;
  const updatedUser = req.body;

  user_model.updateUser(idUser, updatedUser)
    .then(message => {
      res.status(200).json({ message: message });
    })
    .catch(error => {
      res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur', details: error.message });
    });
});

router.post('/professional/update', (req, res) => {
  const professionalData = req.body;

  const professional = new professional_model.Professional(
    professionalData.user_id,
    professionalData.Specialisation,
    professionalData.Activity_adress,
    professionalData.City,
    professionalData.Description
  );

  professional.updateProfessional()
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).json({ message: 'Professional mis à jour avec succès' });
      } else {
        res.status(404).json({ error: 'Professional non trouvé' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Erreur lors de la mise à jour du Professional', details: error.message });
    });
});

router.get("/prescription/user", (req, res) => {
  const { idUser } = req.query; // Obtenez l'idUser de la session actuelle

  prescription_model.getPrescriptionsByUser(idUser)
    .then(result => {
      console.log("Result received:", result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Une erreur s'est produite lors de la récupération des prescriptions de l'utilisateur.");
    });
});

router.get("/prescription/user/professional", (req, res) => {
  const { idUser } = req.query; // Obtenez l'idUser de la session actuelle

  prescription_model.getPrescriptionsByUserProfessional(idUser)
    .then(result => {
      console.log("Result received:", result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Une erreur s'est produite lors de la récupération des prescriptions de l'utilisateur.");
    });
});



router.get("/prescription/:idPrescription", (req, res) => {
  const idPrescription = req.params.idPrescription;

  // Utilisez la fonction getPrescriptionById pour obtenir les informations de l'ordonnance par son ID
  // console.log("Fetching prescription with id: " + idPrescription);
  console.log("Fetching prescription with id: ");
  prescription_model.getPrescriptionById(idPrescription)
      .then(result => {
          if (result) {
              console.log("Prescription found:", result);
              res.send(result);
          } else {
              res.status(404).json({ error: 'Prescription not found' });
          }
      })
      .catch(err => {
          console.log(err);
          res.status(500).send("An error occurred while fetching the prescription.");
      });
});

router.get("/professional/:id", (req, res) => {
  const user_id = req.params.id;

  professional_model.findProfessionalById(user_id)
    .then(professional => {
      console.log("Professional trouvé :", professional);
      res.json(professional);
    })
    .catch(error => {
      console.error(error);
      res.status(404).json({ error: "Professional non trouvé" });
    });
});

router.get("/professional/idprof/:id", (req, res) => {
  const idProfessional = req.params.id;

  professional_model.findProfessionalByIdProf(idProfessional)
    .then(professional => {
      console.log("Professional trouvé :", professional);
      res.json(professional);
    })
    .catch(error => {
      console.error(error);
      res.status(404).json({ error: "Professional non trouvé" });
    });
});

router.get("/user/idprof/:id", (req, res) => {
  const idProfessional = req.params.id;

  user_model.findUserByProf(idProfessional)
    .then(professional => {
      console.log("Professional trouvé :", professional);
      res.json(professional);
    })
    .catch(error => {
      console.error(error);
      res.status(404).json({ error: "Professional non trouvé" });
    });
});

router.get("/professional/:id", (req, res) => {
  const user_id = req.params.id;

  professional_model.findProfessionalById(user_id)
    .then(professional => {
      console.log("Professional trouvé :", professional);
      res.json(professional);
    })
    .catch(error => {
      console.error(error);
      res.status(404).json({ error: "Professional non trouvé" });
    });
});

// Route pour trouver un patient par son id
router.get("/user/:id", (req, res) => {
  const idUser = req.params.id;

  user_model.findClientById(idUser)
    .then(user => {
      console.log("Utilisateur trouvé :", user);
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(404).json({ error: "Utilisateur non trouvé" });
    });
});


router.delete("/prescription/delete/:idPrescription", (req, res) => {
  const idPrescription = req.params.idPrescription;

  prescription_model.deletePrescription(idPrescription)
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).json({ message: 'Prescription supprimée avec succès' });
      } else {
        res.status(404).json({ error: 'Prescription non trouvée' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Erreur lors de la suppression de la prescription', details: error.message });
    });
});

router.use((req, res) => {
    res.status(404);
    res.json({
        error: "API introuvable !"
    });
});

module.exports = router;