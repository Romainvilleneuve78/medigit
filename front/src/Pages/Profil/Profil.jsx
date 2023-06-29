// src/pages/Page1.jsx
import React from 'react';
import './Profil.css';
<<<<<<< HEAD
import MenuPage from '../../components/menu';


function Profil() {
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
                        <button>Modifier mon profil</button>
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
                        <h2>Nom Utilisatuer</h2>
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
=======



function Page4() {
    return (
        <div>
            <h1 class="titre">MON PROFIL </h1>
            <div class="contProfil">
                <div class="left">
                    < img src="../../images/ledoc.jpeg" ></img>
                </div>
                <div class="right">
                    <div class="contProfil2">
                        <div class="leftbis">
                            <h2 class="name">DR.NOZMAN</h2>
                            <h3 class="travail">Chirurgien</h3>
                            <p class="info"> •  Basé à Paris, 7 boulevard des caniveaux 75014</p>
                            <p class="info"> •  Ouvert du Mardi au Samedi de 9h à 18h</p>
                        </div>
                        <div class="rightrouage">
                            < img src="../../images/equipement.png" width={40} ></img>
                        </div>
                    </div>
                    <div class="container">
                        <div class="leftbis">
                            <h4 class="contact">Contact</h4>
                            <p class="info">Phone : +33 1 45 65 78 29</p>
                            <p class="info">Standard : +33 6 24 12 36 87</p>
                            <p class="info">Email : Nozmam.doc@docdoc.com</p>
                        </div>
                        <div class="rightbis">
                            <h4 class="contact">Signature électrique</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;
>>>>>>> main
