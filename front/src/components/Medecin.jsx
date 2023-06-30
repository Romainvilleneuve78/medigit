// SignUp.js
import React, { useState } from 'react';

const Medecin = () => {
    return (
        <div class="log">
            <form action="" method="post">
                {/*prenom */}
                <div class="txt_field"><input type="texte" placeholder='Entrez votre prénom :' id="firstname" /></div>
                {/*nom */}
                <div class="txt_field"><input type="text" placeholder='Entrez votre nom de famille :' id="secondname" /></div>
                {/*sexe */}
                <div class="txt_field"><input type="text" placeholder='Entrez votre sexe :' id="sexe" /></div>
                {/*date naissance */}
                <div class="txt_field"><label>Entrez votre date de naissance  :</label><input type="date" id="birthdate" /></div>
                {/*num */}
                <div class="txt_field"><input type="tel" placeholder='Entrez votre numéro perso :' id="phone" /></div>
                {/*fix */}
                <div class="txt_field"><input type="tel" placeholder='Entrez votre numéro fix :' id="fix" /></div>
                {/*email */}
                <div class="txt_field"><input type="email" placeholder='Entrez votre mail :' id="email" /></div>
                {/*profession */}
                <div class="txt_field"><input type="text" placeholder='Entrez votre profession :' id="profdoctor" /></div>
                {/*lieuTravail */}
                <div class="txt_field"><input type="text" placeholder='Entrez votre adresse de travail :' id="lieutaff" /></div>
                {/*horaire */}
                <div class="txt_field"><label>Entrez votre horaires de travail:</label><input type="text" placeholder='Entrez vos horaires de travail :' id="hortaff" /></div>

                <div class="center-button"><button class='buttonsign' type="submit">Sign Up</button></div>
            </form>
        </div>
    );
};

export default Medecin;
