import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

const MenuPage = () => {
    return (
        <>
        <nav class="menu">
            <div class="links ">
                <ul>
                    <li><Link to="/Home">Accueil</Link></li>
                    <li><Link to="/page2">Mes Ordonnances</Link></li>
                    <li><Link to="/Profil">Mon Profil</Link></li>
                </ul>
            </div>  
        </nav>
    </>
    );
  };
export default MenuPage; 


