// src/pages/Page2.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../components/SignUp';

/*
function SignUp_Page() {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Enregistrez-vous</p>
      <SignUp />
    </div>
  );
}

export default SignUp_Page;*/

/*function SignUp_Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      });

      // La connexion a réussi, faire quelque chose avec les données utilisateur
      console.log(response.data);
      sessionStorage.setItem('user',JSON.stringify(response.data));
    } catch (error) {
      // Une erreur s'est produite lors de la connexion
      console.error(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default SignUp_Page;*/



function SignUp_Page() {
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    Sex: '',
    Birthdate: '',
    Phone: '',
    Fix: '',
    Email: '',
    Kind: '',
    Password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/users/add', userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="FirstName"
        value={userData.FirstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="LastName"
        value={userData.LastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="Sex"
        value={userData.Sex}
        onChange={handleChange}
        placeholder="Sex"
      />
      <input
        type="text"
        name="Birthdate"
        value={userData.Birthdate}
        onChange={handleChange}
        placeholder="Birthdate"
      />
      <input
        type="text"
        name="Phone"
        value={userData.Phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="Fix"
        value={userData.Fix}
        onChange={handleChange}
        placeholder="Fix"
      />
      <input
        type="email"
        name="Email"
        value={userData.Email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="Kind"
        value={userData.Kind}
        onChange={handleChange}
        placeholder="Kind"
      />
      <input
        type="password"
        name="Password"
        value={userData.Password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp_Page;