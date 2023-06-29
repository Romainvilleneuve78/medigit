// src/pages/Page2.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../components/SignUp';



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
        const userId = response.data.insertId;
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
      <label>
        <input
          type="radio"
          name="Kind"
          value="0"
          checked={userData.Kind === '0'}
          onChange={handleChange}
        />
        Client
      </label>
      <label>
        <input
          type="radio"
          name="Kind"
          value="1"
          checked={userData.Kind === '1'}
          onChange={handleChange}
        />
        Professional
      </label>
      <input
        type="password"
        name="Password"
        value={userData.Password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>

      {userData.Kind === '0' && <p>Client</p>}
      {userData.Kind === '1' && <p>Professional</p>}
    </form>
  );
}

export default SignUp_Page;

/*
function SignUp_Page() {
  const history = useHistory();

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
        const userId = response.data.insertId;

        // Redirection conditionnelle
        if (userData.Kind === '0') {
          history.push('/updateClient'); // Rediriger vers la page updateClient.jsx
        } else if (userData.Kind === '1') {
          history.push('/updateProfessionnel'); // Rediriger vers la page updateProfessionel.jsx
        }
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
      <label>
        <input
          type="radio"
          name="Kind"
          value="0"
          checked={userData.Kind === '0'}
          onChange={handleChange}
        />
        Client
      </label>
      <label>
        <input
          type="radio"
          name="Kind"
          value="1"
          checked={userData.Kind === '1'}
          onChange={handleChange}
        />
        Professional
      </label>
      <input
        type="password"
        name="Password"
        value={userData.Password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>

      {userData.Kind === '0' && <p>Client</p>}
      {userData.Kind === '1' && <p>Professional</p>}
    </form>
  );
}

export default SignUp_Page;*/