import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import { Link as ScrollLink } from 'react-scroll';

const MenuPageHome = () => {
    return (
        <>
        <nav className="menu_home">
            <div className="links">
                <ul>
                    {/* <li><Link to="/Home#expl">Accueil</Link></li> /}
                    {/ <li><a href="#expl" >Accueil</a></li> */}
                    <li><ScrollLink to="expl" smooth={true} duration={500} className="linkHome">Aide</ScrollLink></li>
                    <li><ScrollLink to="sign" smooth={true} duration={500} className="linkHome">Se connecter</ScrollLink></li>
                    <li><Link to="/Profil" className="linkHome">Mon Profil</Link></li>
                    <li><Link to="/Ordonnance" className="linkHomefin">Mes Ordonnances</Link></li>
                </ul>
            </div>
        </nav>
    </>
    );
  };
export default MenuPageHome;