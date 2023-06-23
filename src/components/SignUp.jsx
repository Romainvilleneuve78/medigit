// SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
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

          <input
            type="texte"
            placeholder='Entrez votre firstname '
            id="firstname"
            value={email}
            required
          //   onChange={handleEmailChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="secondname">Second Name:</label>
          <input
            type="text"
            id="secondname"
            value={password}
          //   onChange={handlePasswordChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="sexe">Sexe:</label>
          <input
            type="text"
            id="sexe"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="birthdate">Birth date:</label>
          <input
            type="date"
            id="birthdate"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            id="phone"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="fix">Fix :</label>
          <input
            type="tel"
            id="fix"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="Refdoctor">médecin traitant :</label>
          <input
            type="text"
            id="Refdoctor"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="txt_field">
          <label htmlFor="secu">N° de sécurité sociale :</label>
          <input
            type="text"
            id="Refdoctor"
            value={fullName}
          //   onChange={handleFullNameChange}
          />
        </div>
        <div class="center-button"><button type="submit">Sign Up</button></div>
      </form>
    </div>
  );
};

export default SignUp;
