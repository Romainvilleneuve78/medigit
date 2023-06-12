import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/page1">Screen 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
      <Routes> {/* Remplacez le composant Route par Routes */}
        <Route path="/page1" element={<Page1 />} /> {/* Utilisez l'attribut element pour définir le composant */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
