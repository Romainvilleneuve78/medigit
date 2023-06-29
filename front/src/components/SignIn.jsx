// SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const handlePasswordChange = (event) => {
  //     setPassword(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  // Appeler votre API backend pour gérer la connexion avec les données email et password
  // ...
  //   };
  // mettre au niveau du form :  onSubmit={handleSubmit}
  return (
    <div class="log">
      <form action="" method="post">
        <div class="txt_field">
          <input type="email" id="email" placeholder="Entrez votre email :"></input>
        </div>
        <div class="txt_field">
          <input type="password" id="password" placeholder="Entrez votre mot de passe :"></input>
        </div>
        <div class="center-button"><button type="submit">Sign In</button></div>
        {/* <div class="pass">
          <label>Forgot your Password ?</label>
        </div> */}

        <div class="pass">
          <label>Not a member?</label>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
