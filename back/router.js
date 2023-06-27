const express = require("express");
const router = express.Router();
var user_model = require('./UserModel');
var prescription_model = require('./PrescriptionModel');


module.exports = router;

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

router.get("/prescription/list", (req, res) => {
    prescription_model.list_prescription().then(result => {
        console.log("Result received:", result);
        res.send(result);
    }).catch(err => {
        res.send("{error}");
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






router.use((req, res) => {
    res.status(404);
    res.json({
        error: "API introuvable !"
    });
});

