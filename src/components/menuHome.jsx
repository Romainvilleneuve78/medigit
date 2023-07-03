import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';

const MenuPageHome = () => {

    const isUserLoggedIn = true; // Mettez la valeur réelle de l'état de connexion de l'utilisateur ici
    const Kind = 0;

    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData ? sessionData.idUser : null; // Vérifiez si les informations de l'utilisateur sont disponibles dans la session

    console.log(idUser);
  
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

    console.log(user);
    console.log(sessionData);
  
    if (loading) {
        return <div>Chargement en cours...</div>;
    }
  

    // if (!idUser || !sessionData) {
    //     return <div>Vous n'êtes pas connecté. Connectez-vous pour accéder à cette page.</div>;
    // }

    return (
        <>
        <nav className="menu_home">
            <div className="links">
                <ul>

                    <li><ScrollLink to="expl" smooth={true} duration={500} className="linkHome">Aide</ScrollLink></li>


                    {!idUser || !sessionData ? ( // Si l'utilisateur n'est pas connecté
                        <li><ScrollLink to="sign" smooth={true} duration={500} className="linkHome">Se connecter</ScrollLink></li>
                    ) : ( // Si l'utilisateur est connecté
                        <>
                            <li><Link to="/Profil" className="linkHome">Mon Profil</Link></li>
                            {sessionData.Kind === 0 && (
                                <li><Link to="/Ordonnance" className="LinkHomefin">Mes Ordonnances</Link></li>
                            )}
                            {sessionData.Kind === 1 && (
                                <li><Link to="/AddOrdo" className="linkHomefin">Faire une Ordonnance</Link></li>
                            )}
                        </>
                    )}



                    
                </ul>
            </div>
        </nav>
    </>
    );
  };
export default MenuPageHome;