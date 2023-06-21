// src/pages/Page1.jsx
import React from 'react';
import './Profil.css';



function Page4() {
    return (
        <div>
            <div class="contProfil">
                <div class="left">
                    < img src="../../images/ledoc.jpeg" ></img>
                </div>
                <div class="right">
                    <div class="contProfil2">
                        <div class="leftbis">
                            <h2 class="name">DR.NOZMAN</h2>
                            <h3 class="travail">Chirurgien</h3>
                            <h4 class="contact">Clinique de la Garonne</h4>
                            <p class="info">• Adresse : 7 boulevard des caniveaux, 75014 Paris</p>
                            <p class="info">• Horaire : Mardi au samedi, 9h/18h</p>
                        </div>
                        <div class="rightrouage">
                            <button>< img src="../../images/equipement.png" width={40} ></img></button>
                        </div>
                    </div>
                    <div class="contProfil2">
                        <div class="leftbis">
                            <h4 class="contact">Contact</h4>
                            <p class="info">Phone : +33 1 45 65 78 29</p>
                            <p class="info">Standard : +33 6 24 12 36 87</p>
                            <p class="info">Email : Nozmam.doc@docdoc.com</p>
                        </div>
                        <div class="rightrouage">
                            <h4 class="contact">Signature électronique :</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;
