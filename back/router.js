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
