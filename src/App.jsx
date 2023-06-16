import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

import Page1 from './Pages/Accueil/Accueil';
import Page2 from './Pages/Ordonnances/Ordonnances';
import Page3 from './Pages/Rappels/Rappels';
import Page4 from './Pages/Profil/Profil';
import AddOrdo from './Pages/AddOrdo/AddOrdo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

{/* <Router>
<nav>
  <Link to="/page1">Page 1</Link>
  <Link to="/page2">Page 2</Link>
  <Link to="/page3">Page 3</Link>
  <Link to="/page4">Page 4</Link>
  <Link to="/addOrdo">Ajouter une ordonnance</Link>
</nav>
<Routes> 
  <Route path="/page1" element={<Page1 />} />
  <Route path="/page2" element={<Page2 />} />
  <Route path="/page3" element={<Page3 />} />
  <Route path="/page4" element={<Page4 />} />
  <Route path="/addOrdo" element={<AddOrdo />} />
  
</Routes>
</Router> */}

<Router>
      <header>
        <nav class="navbar">
            <a href=""><h1>MeDigit.</h1></a>
            <h2>Recuperez vos ordonnaces n'importe où et nimporte quand</h2>
            <a href="">
              <div class="nav-links ">
                  <ul>
                      <li>User123</li>
                      <li><img class="user" src="images/user.png" alt="Logo"></img></li>
                  </ul>
              </div>
            </a>
        </nav>
      </header>

      <nav class="menu">
        <div class="links ">
            <ul>
              <li><Link to="/page1">Home</Link></li>
              <li><Link to="/page2">Mes Ordonnances</Link></li>
              <li><Link to="/page3">Mon Profil</Link></li>
              <li><Link to="/page4">Mes Rappels</Link></li>
              <li><Link to="/addOrdo">Ajouter une ordonnance</Link></li>
            </ul>
        </div>    
      </nav>
    
      <Routes> {/* Remplacez le composant Route par Routes */}
        <Route path="/page1" element={<Page1 />} /> {/* Utilisez l'attribut element pour définir le composant */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/addOrdo" element={<AddOrdo />} />
        {/* <Route path="/SignUp_Page" element={<SignUp_Page />} />
        <Route path="/SignIn_Page" element={<SignIn_Page />} /> */}
      </Routes>
      </Router>
    </>
  )
}

export default App
// src/App.jsx
// src/App.jsx


// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/page1">Page 1</Link>
//         <Link to="/page2">Page 2</Link>
//       </nav>
//       <Routes> {/* Remplacez le composant Route par Routes */}
//         <Route path="/page1" element={<Page1 />} /> {/* Utilisez l'attribut element pour définir le composant */}
//         <Route path="/page2" element={<Page2 />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
