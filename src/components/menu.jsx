import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import axios from 'axios';


const MenuPage = () => {
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
  
    if (!idUser || !sessionData) {
        return <div>Vous n'êtes pas connecté. Connectez-vous pour accéder à cette page.</div>;
    }
    
    let menuHomeClass = 'menu_home_non_co';
    if (user && sessionData) {
      if (sessionData.Kind === 0) {
        menuHomeClass = 'menu_home_co_0';
      } else if (sessionData.Kind === 1) {
        menuHomeClass = 'menu_home_co_1';
      }
    }

    return (
        <>
        <nav className={menuHomeClass} style={menuHomeClass === 'menu_home_co_1' ? { width: '78%' } : {width:'55%'}}>
            <div className="links ">
                <ul>
                    <li><Link to="/Accueil" className='linkHome'>Accueil</Link></li>
                    <li><Link to="/Profil" className='linkHome'>Mon Profil</Link></li>                    

                    {sessionData.Kind === 0 && (
                        <li><Link to="/Ordonnance" className="linkHome">Mes Ordonnances</Link></li>
                    )}
                    {sessionData.Kind === 1 && (
                        <ul>
                            <li><Link to="/AddOrdo" className="linkHome">Faire une Ordonnance</Link></li>
                            <li><Link to="/Ordonnance" className="linkHome">Mes Ordonnances</Link></li>
                        </ul>
                    )}

                </ul>
            </div>
        </nav>
    </>
    );
  };
export default MenuPage;