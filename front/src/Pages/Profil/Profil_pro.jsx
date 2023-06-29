// src/pages/Page1.jsx
import React from 'react';
import './Profil_pro.css';


function Profil_pro() {
    return (
        <>
            <div class='profil'>
                <h1>Contact professionel</h1>
                <div class="Profil-pro">
                    <div class="picture">
                        < img src="../../images/pdp.png" ></img>
                    </div>

                    <div class="info">
                        <h2>John NOZMAN</h2>
                        <h3>Docteur en chirurgie dentaire</h3>
                        <p style={{ width: '80%' }}>Docteur spécialisé dans la chirurgie maxillo-faciale et la reconstruction de mâchoire chez les adultes.</p>


                        <div class='infos'>
                            <div class="info-1">
                                <h4>Lieu d'activitée</h4>
                                <p>Clinique de la Garonne</p>
                                <p>7 boulevard des caniveaux, 75014 Paris</p>
                                <p>Mardi au samedi, 9h/18h</p>
                            </div>

                            <div class="info-2">
                                <h4 class="contact">Contact</h4>
                                <p class="infoProf">Phone : +33 1 45 65 78 29</p>
                                <p class="infoProf">Standard : +33 6 24 12 36 87</p>
                                <p class="infoProf">Email : Nozmam.doc@docdoc.com</p>
                            </div>
                        </div>

                    </div>

                    <button><a href='https://www.doctolib.fr'>Prendre un rendez vous</a></button>

                </div>
            </div>
        </>
    );
}

export default Profil_pro;
