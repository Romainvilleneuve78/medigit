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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
<Router>
<nav>
  <Link to="/page1">Page 1</Link>
  <Link to="/page2">Page 2</Link>
  <Link to="/page3">Page 3</Link>
  <Link to="/page4">Page 4</Link>
</nav>
<Routes> {/* Remplacez le composant Route par Routes */}
  <Route path="/page1" element={<Page1 />} /> {/* Utilisez l'attribut element pour définir le composant */}
  <Route path="/page2" element={<Page2 />} />
  <Route path="/page3" element={<Page3 />} />
  <Route path="/page4" element={<Page4 />} />
  
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
