import React, { useState, useEffect } from 'react';
import './Profil.css';
import MenuPage from '../../components/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import axios from 'axios';
// import { use } from '../../../back/router';


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

    const userTypeText = user.Kind === 0 ? 'patient' : 'professionnel';

    console.log(user);
    
    return (
        <>
            <div className='header_profil_extend'>
                <div className='fond'>
                    <div className='txt'>
                        <MenuPage/>
                        <div className='title'>
                            <h1>Mon espace</h1>
                            {/* <h2>(particulier)</h2> */}
                            <h2>({userTypeText})</h2>
                        </div>
                        {/* <button>Modifier mon profil</button> */}
                        <Link to="/ModifProf"><div className='butmodif'>Modifier mon profil</div></Link>
                    </div> 
                    <img src='../../images/mon-espace.png'></img>
                </div>
            </div>

            <div className='profil'>
                <div className="Profil-pro">
                    <div className="picture">
                        < img src="../../images/pdp.png" ></img>
                    </div>

                    <div className="info">
                        <h2>{user.FirstName} {user.LastName}</h2>
                        {user.Kind===0 && (
                            <h3>{user.Adress}, {user.cityclient}</h3>
                        )}
                        {user.Kind===1 && (
                            <h3>{user.Activity_adress}, {user.citypro}</h3>
                        )}

                        <div className='infos'>
                            {user.Kind===0 && (
                                <div className="info-1">
                                    <h4>Informations de santé :</h4>
                                    <p>Numero de sécurité sociale : {user.n_secu}</p>
                                    <p>Date de naissance : {user.Birthdate}</p>
                                </div>
                            )}
                            {user.Kind===1 && (
                                <div className="info-1">
                                <h4>Informations :</h4>
                                <p>{user.Specialisation}</p>
                                <p>{user.Description}</p>
                            </div>
                            )}

                            <div className="info-3">
                                <h4 className="contact">Contact</h4>
                                <p className="infoProf">Phone : {user.Phone}</p>
                                <p className="infoProf">Standard : {user.Fix}</p>
                                <p className="infoProf">Email : {user.Email}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profil;