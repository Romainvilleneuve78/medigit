import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

const MenuPage = () => {
    return (
        <>
        <nav class="menu">
            <div class="links ">
                <ul>
                    <li><Link to="/Accueil">Accueil</Link></li>
                    <li><Link to="/Ordonnance">Mes Ordonnances</Link></li>
                    <li><Link to="/Profil">Mon Profil</Link></li>
                </ul>
            </div>  
        </nav>
    </>
    );
  };
export default MenuPage; 


