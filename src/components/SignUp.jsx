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
    <div>
      <form >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
        //   onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
        //   onChange={handlePasswordChange}
        />
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
        //   onChange={handleFullNameChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
