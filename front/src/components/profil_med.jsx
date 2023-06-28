import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes

const Profil_med = () => {
    return (
        <>
            <div class='profil'>
                <h1>Mon Profil</h1>
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

                    <Link to="/Modifier_Profil"><button>Modifier mon profil</button></Link>

                </div>
            </div>
        </>
    );
  };
export default Profil_med; 


