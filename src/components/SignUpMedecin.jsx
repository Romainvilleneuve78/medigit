// SignUp.js
import React, { useState } from 'react';

const SignUpMedecin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    //   const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    //   };

    //   const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    //   };

    //   const handleFullNameChange = (event) => {
    //     setFullName(event.target.value);
    //   };

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Appeler votre API backend pour gérer l'inscription avec les données email, password et fullName
    //     // ...
    //   };
    //   mettre dans le form : onSubmit={handleSubmit}
    return (
        <div class="log">
            <form action="" method="post">
                <div class="txt_field">
                    <input type="text" id="firstName" placeholder="Entrez votre prénom :"></input>
                </div>
                <div class="txt_field">
                    <input type="text" id="SecondName" placeholder="Entrez votre nom de famille :"></input>
                </div>
                <div class="txt_field">
                    <input type="text" id="sexe" placeholder="Entrez votre sexe :"></input>
                </div>
                <div class="txt_field">
                    <label>Date naissance :</label>
                    <input type="date" id="birthdate" placeholder="Entrez votre date de naissance :"></input>
                </div>
                <div class="txt_field">
                    <input type="tel" id="phone" placeholder="Entrez votre numéro de téléphone :"></input>
                </div>
                <div class="txt_field">
                    <input type="tel" id="fix" placeholder="Entrez votre numéro fix :"></input>
                </div>
                <div class="txt_field">
                    <input type="email" id="email" placeholder="Entrez votre email :"></input>
                </div>
                <div class="txt_field">
                    <input type="text" id="cabName" placeholder="Entrez votre nom du cabinet :"></input>
                </div>
                <div class="txt_field">
                    <input type="text" id="cabAdress" placeholder="Entrez l'adresse de votre cabinet :"></input>
                </div>
                <div class="txt_field">
                    <input type="text" id="horaire" placeholder="Entrez les horaires de votre cabinet :"></input>
                </div>
                <div class="txt_field">
                    <input type="password" id="password" placeholder="Entrez votre mot de passe :"></input>
                </div>
                <div class="center-button"><button type="submit">Sign Up</button></div>
            </form>
        </div>
    );
};

export default SignUpMedecin;
