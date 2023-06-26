import { Router } from 'express';
const router = Router();

// Import des contrôleurs
import { login } from "../back/models/UserModel.cjs";

// Redirection
router.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Route pour la connexion
router.post('/login', login);

export default router;
