// src/pages/Page1.jsx
import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import SignIn_Page from '../SignIn_Page'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import SignUp_Page from '../SignUp_Page';
function Page1() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Mode d'emploi de l'utilisation du site web et comment obtenir une ordonnance</p>

<nav>

  <Link to="/SignIn_Page">Sign In</Link>
  <Link to="/SignUp_Page">Sign Up</Link>
</nav>
<Routes> {/* Remplacez le composant Route par Routes */}
  <Route path="/SignIn_Page" element={<SignIn_Page />} />
  <Route path="/SignUp_Page" element={<SignUp_Page />} />
  
</Routes>
    </div>
  );
}

export default Page1;
