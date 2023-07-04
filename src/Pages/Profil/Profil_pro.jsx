// src/pages/Page1.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profil_pro.css';
import MenuPage from '../../components/menu';
import { useParams } from 'react-router-dom';

function Profil_pro() {
    const userKind = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).Kind : null;
    if (userKind === 0){
        
    const { idProfessional } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
          .get(`http://localhost:3000/professional/${idProfessional}`)
          .then(response => {
            setUser(response.data);
            console.log(user);
          })
          .catch(error => {
            console.error(
              'Une erreur s\'est produite lors de la récupération des informations du professionnel :',
              error
            );
          });
      }, [idProfessional]);
    return (
        <>
            <div class='header_profilpro_extend'>
                <div class='fond'>
                    <div class='txt'>
                        <MenuPage/>
                        <div class='title'>
                            <h1>Contact professionel</h1>
                        </div>
                        <button><a href='https://www.doctolib.fr'>Prendre un rendez vous</a></button>
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
                        <h3>{user.Specialisation}</h3>

                        <div class='infos'>
                            <div class="info-1">
                                <h4>Lieu d'activitée</h4>
                                <p>{user.Activity_adress}</p>
                                <p>{user.City}</p>
                            </div>

                            <div class="info-2">
                                <h4 class="contact">Contact</h4>
                                <p class="infoProf">{user.Phone}</p>
                                <p class="infoProf">{user.Email}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
    }else{
        
    const { idProfessional } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
          .get(`http://localhost:3000/client/${idProfessional}`)
          .then(response => {
            setUser(response.data);
          })
          .catch(error => {
            console.error(
              'Une erreur s\'est produite lors de la récupération des informations du client :',
              error
            );
          });
      }, [idProfessional]);
    return (
        <>

            <div class='profil'>
                <div class="Profil-pro">
                    <div class="picture">
                        < img src="../../images/pdp.png" ></img>
                    </div>

                    <div class="info">
                        <h2>{user.FirstName} {user.LastName}</h2>
                        <h3>{user.n_secu}</h3>


                        <div class='infos'>
                            <div class="info-1">
                                <h4>Adresse</h4>
                                <p>{user.Adress}</p>
                                <p>{user.City}</p>
                            </div>

                            <div class="info-2">
                                <h4 class="contact">Contact</h4>
                                <p class="infoProf">{user.Phone}</p>
                                <p class="infoProf">{user.Email}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
    }

}

export default Profil_pro;