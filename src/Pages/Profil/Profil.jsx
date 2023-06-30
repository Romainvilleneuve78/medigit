import React, { useState, useEffect } from 'react';
import './Profil.css';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import axios from 'axios';


function Profil() {
    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData.idUser;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Faites la requête HTTP pour récupérer les données de l'utilisateur
        axios.get(`http://localhost:3000/user/${idUser}`)
        .then(response => {
            setUser(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
            setLoading(false);
        });
    }, [idUser]);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (!user) {
        return <div>Utilisateur non trouvé</div>;
    }

    
    
    return (
        <>
            <div class='header_profil_extend'>
                <div class='fond'>
                    <div class='txt'>
                        <MenuPage/>
                        <div class='title'>
                            <h1>Mon espace</h1>
                            <h2>(particulier)</h2>
                        </div>
                        {/* <button>Modifier mon profil</button> */}
                        <Link to="/ModifProf"><div className='butmodif'>Modifier mon profil</div></Link>
                    </div>
                    <img src='../../images/mon-espace.png'></img>
                </div>
            </div>

            <div class='profil'>
                <div class="Profil-pro">
                    <div class="picture">
                        < img src="../../images/pdp.png" ></img>
                    </div>

                    <div class="info">
                        <h2>{user.FirstName} {user.LastName}</h2>
                        <h3>Adress patient</h3>

                        <div class='infos'>
                            <div class="info-1">
                                <h4>Information de santé</h4>
                                <p>Numero de sécurité sociale : 012527537278292</p>
                                <p>Medecin traitant: Emilie BOURBIER</p>

                                <div class="info_supp">
                                    <h4>Antécedant médicaux</h4>
                                    <p>Hypertention / Alergie gluten</p>
                                    <h4>Intervention chirurgicales</h4>
                                    <p>10/11/23 : Ablation des ligaments posterieur du genoux droit</p>
                                    <p>11/02/99 : Ablation des dents de sagesses</p>
                                </div>
                            </div>

                            <div class="info-3">
                                <h4 class="contact">Contact</h4>
                                <p class="infoProf">Phone : +33 1 45 65 78 29</p>
                                <p class="infoProf">Standard : +33 6 24 12 36 87</p>
                                <p class="infoProf">Email : Nozmam.doc@docdoc.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profil;