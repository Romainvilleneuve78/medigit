import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

import Page1 from './Pages/Accueil/Accueil';
import Page2 from './Pages/Ordonnances/Ordonnances';
import Page3 from './Pages/Rappels/Rappels';
import Page4 from './Pages/Profil/Profil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/page1">Screen 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
    
      <Routes> {/* Remplacez le composant Route par Routes */}
        <Route path="/page1" element={<Page1 />} /> {/* Utilisez l'attribut element pour définir le composant */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/SignUp_Page" element={<SignUp_Page />} />
        <Route path="/SignIn_Page" element={<SignIn_Page />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
