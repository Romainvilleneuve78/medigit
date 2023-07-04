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
    
    return (
        <>
        <nav className="menu">
            <div className="links ">
                <ul>
                    <li><Link to="/Accueil">Accueil</Link></li>
                    <li><Link to="/Profil">Mon Profil</Link></li>                    

                    {sessionData.Kind === 0 && (
                        <li><Link to="/Ordonnance" className="LinkHomefin">Mes Ordonnances</Link></li>
                    )}
                    {sessionData.Kind === 1 && (
                        <ul>
                            <li><Link to="/AddOrdo" className="LinkHomefin">Faire une Ordonnance</Link></li>
                            <li><Link to="/Ordonnance" className="LinkHomefin">Mes Ordonnances</Link></li>
                        </ul>
                    )}

                </ul>
            </div>
        </nav>
    </>
    );
  };
export default MenuPage;