// src/pages/Page1.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profil_pro.css';
import MenuPage from '../../components/menu';
import { useParams } from 'react-router-dom';

function Profil_pro() {
    const { idProfessional } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios
          .get(`http://localhost:3000/professional/idprof/${idProfessional}`)
          .then(response => {
            setUser(response.data);
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
                        <p style={{ width: '80%' }}>Docteur spécialisé dans la chirurgie maxillo-faciale et la reconstruction de mâchoire chez les adultes.</p>


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
}

export default Profil_pro;