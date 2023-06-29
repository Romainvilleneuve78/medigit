<<<<<<< HEAD
const express = require("express");
const router = express.Router();
var user_model = require('./UserModel');


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



router.post("/user/add", (req, res) => {
    res.send("OK");
});








router.use((req, res) => {
    res.status(404);
    res.json({
        error: "API introuvable !"
    });
});
=======
import { Router } from 'express'
const router = Router()

//récupération des controllers
import { createUser, loginUser, logoutUser, getUser } from './controllers/UserController.js'

import { createCredit, answerCredit } from './controllers/transController.js'

import loginBank from './controllers/bankController.js'

//redirect
router.get('/', (req, res) => {
    res.redirect('/index.html');
});

/*
// pour le userController
router.post('/register', createUser)
router.post('/login_client', loginUser)
router.post('/logout', logoutUser)
router.post('/getprofile', getUser) // à implémenter pour faire une page profil, mais voir pour utiliser Vue js

// pour le bankController
router.post('/login_banque', loginBank)

// pour le transController
router.post('/credit', createCredit)
router.post('/answer_credit', answerCredit)
*/
export default router
>>>>>>> main
