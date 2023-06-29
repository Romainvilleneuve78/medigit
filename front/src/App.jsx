import React from 'react';
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

import Home from './Pages/Accueil/Accueil';
import Page2 from './Pages/Ordonnances/Ordonnances';
import Page3 from './Pages/Rappels/Rappels';
import Profil from './Pages/Profil/Profil';
import AddOrdo from './Pages/AddOrdo/AddOrdo';
import Profil_pro from './Pages/Profil/Profil_pro';
import Ordopdf from './Pages/Ordonnances/Ordopdf';
import SignIn_Page from './Pages/SignIn_Page'
import SignUp_Page from './Pages/SignUp_Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <header>
          <nav className="navbar">
              <a href="/Home"><h1>MeDigit.</h1></a>
              <h2>Recuperez vos ordonnaces n'importe où et nimporte quand</h2>
              <a href="/SignIn_Page">
                <div className="nav-links ">
                    <ul>
                        <li>Se connecter</li>
                        <li><img className="user" src="images/user.png" alt="Logo"></img></li>
                    </ul>
                </div>
              </a>
          </nav>
        </header>

        
      
        <Routes> {/* Remplacez le composant Route par Routes */}
          <Route path="/Home" element={<Home />} /> {/* Utilisez l'attribut element pour définir le composant */}
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/AddOrdo" element={<AddOrdo />} />
          <Route path="/SignUp_Page" element={<SignUp_Page />} />
          <Route path="/SignIn_Page" element={<SignIn_Page />} />
          <Route path="/Profil_pro" element={<Profil_pro />} />
          <Route path="/Ordopdf" element={<Ordopdf />} />
        </Routes>

      </Router>

      <footer>
          <h1>MeDigit.</h1>
          <div class='txt'>Master Camp 2023</div>
      </footer>
    </>
  )
}

export default App
