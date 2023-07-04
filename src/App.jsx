import { useState, useEffect } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import axios from 'axios';


import Accueil from './Pages/Accueil/Accueil';
import Ordonnance from './Pages/Ordonnances/Ordonnances';
import Profil from './Pages/Profil/Profil';
import AddOrdo from './Pages/AddOrdo/AddOrdo';
import Profil_pro from './Pages/Profil/Profil_pro';
import Ordopdf from './Pages/Ordonnances/Ordopdf';
import SignIn_Page from './Pages/SingIn/SignIn_Page'
import SignUp_Page from './Pages/SignUp/SignUp_Page'
import ModifProf from './Pages/ModifProf/ModifProf';
import updateClient from './Pages/updateClient'
import updateProfessional from './Pages/updateProfessional'



// import Page1 from './Pages/Accueil/Accueil';
// import Page2 from './Pages/Ordonnances/Ordonnances';
// import Page3 from './Pages/Profil/Profil';
// import AddOrdo from './Pages/AddOrdo/AddOrdo';

function App() {
  const [count, setCount] = useState(0)

  const isUserLoggedIn = true; // Mettez la valeur réelle de l'état de connexion de l'utilisateur ici

  const sessionData = JSON.parse(sessionStorage.getItem('user'));
  const idUser = sessionData ? sessionData.idUser : null; // Vérifiez si les informations de l'utilisateur sont disponibles dans la session

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Faites la requête HTTP pour récupérer les données de l'utilisateur s'il est connecté
      if (idUser) {
          axios.get(`http://localhost:3000/user/${idUser}`)
              .then(response => {
                  setUser(response.data);
                  setLoading(false);
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
                  setLoading(false);
              });
      } else {
          setLoading(false); // L'utilisateur n'est pas connecté, arrêtez de charger
      }
  }, [idUser]);

  if (loading) {
      return <div>Chargement en cours...</div>;
  }

  const handleLogout = () => {
    sessionStorage.clear();
    setUser(null);
    navigate('/Accueil', { replace: true });
    window.location.reload(); 
  };

//   if (!idUser || !user) {
//       return <div>Vous n'êtes pas connecté. Connectez-vous pour accéder à cette page.</div>;
//   }

  return (
    <>
      <Router>
        <header>
          <nav className="navbar">
              <a href="/Accueil"><h1>MeDigit.</h1></a>
              <h2>Votre santé à portée de main, vos ordonnances partout, tout le temps.</h2>
              {/* {!isUserLoggedIn && (
                
                <a href="/SignIn_Page">
                  <div className="nav-links ">
                      <ul>
                          <li>Se connecter</li>
                          <li><img className="user" src="images/user.png" alt="Logo"></img></li>
                      </ul>
                  </div>
                </a>
              )}
              {isUserLoggedIn && (
                <a href="/Profil">
                  <div className="nav-links ">
                      <ul>
                          <li>Mon Profil</li>
                          <li><img className="user" src="images/user.png" alt="Logo"></img></li>
                      </ul>
                  </div>
                </a>
              )} */}
              {!idUser || !sessionData ? ( // Si l'utilisateur n'est pas connecté, affichez le bouton "Se connecter"
                  <a href="/SignIn_Page">
                      <div className="nav-links">
                          <ul>
                              <li>Se connecter</li>
                              <li><img className="user" src="images/user.png" alt="Logo"></img></li>
                          </ul>
                      </div>
                  </a>
              ) : ( // Si l'utilisateur est connecté, affichez le bouton "Mon Profil"
                  <a href="/Profil">
                      <div className="nav-links">
                          <ul>
                              <li><button onClick={handleLogout}>Déconnexion</button></li>
                              <li>Mon Profil</li>
                              <li><img className="user" src="images/user.png" alt="Logo"></img></li>
                          </ul>
                      </div>
                  </a>
              )}



          </nav>
        </header>

        <Routes> {/* Remplacez le composant Route par Routes */}
          <Route path="/" element={<Accueil />} /> {/* Utilisez l'attribut element pour définir le composant */}
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Ordonnance" element={<Ordonnance />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/AddOrdo" element={<AddOrdo />} />
          <Route path="/SignUp_Page" element={<SignUp_Page />} />
          <Route path="/SignIn_Page" element={<SignIn_Page />} />
          <Route path="/Profil_pro/:idProfessional" element={<Profil_pro />} />
          <Route path="/Ordopdf/:idPrescription" element={<Ordopdf />} />
          <Route path="/ModifProf" element={<ModifProf />} />
        </Routes>

      </Router>

      <footer>
          <h1>MeDigit.</h1>
          <div className='txt'>Master Camp 2023</div>
      </footer>
    </>
  )
}

export default App
