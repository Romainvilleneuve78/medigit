// SignUp.js
import React, { useState } from 'react';

const Medecin = () => {
    return (
        <div class="log">
            <form action="" method="post">
                {/*prenom */}
                <div class="txt_field"><label>Entrez votre prénom :</label><input type="texte" id="firstname" /></div>
                {/*nom */}
                <div class="txt_field"><label>Entrez votre nom de famille :</label><input type="text" id="secondname" /></div>
                {/*sexe */}
                <div class="txt_field"><label>Entrez votre sexe :</label><input type="text" id="sexe" /></div>
                {/*date naissance */}
                <div class="txt_field"><label>Entrez votre date de naissance  :</label><input type="date" id="birthdate" /></div>
                {/*num */}
                <div class="txt_field"><label>Entrez votre numéro perso :</label><input type="tel" id="phone" /></div>
                {/*fix */}
                <div class="txt_field"><label>Entrez votre numéro fix :</label><input type="tel" id="fix" /></div>
                {/*email */}
                <div class="txt_field"><label>Entrez votre adresse mail :</label><input type="email" id="email" /></div>
                {/*profession */}
                <div class="txt_field"><label>Entrez votre profession :</label><input type="text" id="profdoctor" /></div>
                {/*lieuTravail */}
                <div class="txt_field"><label>Entrez votre adresse de travail:</label><input type="text" id="lieutaff" /></div>
                {/*horaire */}
                <div class="txt_field"><label>Entrez votre horaires de travail:</label><input type="text" id="hortaff" /></div>

                <div class="center-button"><button class='buttonsign' type="submit">Sign Up</button></div>
            </form>
        </div>
    );
};

export default Medecin;
