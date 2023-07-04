// src/pages/Page2.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../../components/SignUp';
import './SignUp.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';



//vraie fonction
function SignUp_Page() {
  const navigate = useNavigate(); // Use the useNavigate hook for redirection
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    Sex: '',
    Birthdate: '',
    Phone: '',
    Fix: '',
    Email: '',
    Kind: '',
    Password: '',
    ConfirmPassword: ''
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

    if (userData.Password === userData.ConfirmPassword) {
      axios
        .post('http://localhost:3000/users/add', userData)
        .then((response) => {
          console.log(response.data);
          const userId = response.data.insertId;
          navigate('/Accueil'); // Redirect the user to the home page
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Les mots de passe ne correspondent pas !");
    }
  };

  return (
    <>
      <div class='header_sub'>
        <div class='fond'>
          <h1>Créez votre compte</h1>
          <img src='../../images/mon-espace.png'></img>
        </div>
      </div>

      <div className='subribtion'>
        <form onSubmit={handleSubmit}>
          <div className='info_1'>
            <h2>Qui êtes vous ?</h2>
            <label>
              <input type="radio" name="Kind" value="0" checked={userData.Kind === '0'} onChange={handleChange}/>
              Client
            </label>
            <label>
              <input type="radio" name="Kind" value="1" checked={userData.Kind === '1'} onChange={handleChange}/>
              Professionel
            </label>
          </div>

          <div className='info_2'>
            <input type="text" name="FirstName" value={userData.FirstName} onChange={handleChange} placeholder="First Name"/>
            <input type="text" name="LastName" value={userData.LastName} onChange={handleChange} placeholder="Last Name"/>
          </div>

          <div className='info_3'>
            <label>
              <input type="radio" name="Sex" value="F" checked={userData.Sex === 'F'} onChange={handleChange}/>
              Femme
            </label>
            <label>
              <input type="radio" name="Sex" value="M" checked={userData.Sex === 'M'} onChange={handleChange}/>
              Homme
            </label>
          </div>

          <div className='info_3'>
            <input
              type="date"
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
              type="password"
              name="Password"
              value={userData.Password}
              onChange={handleChange}
              placeholder="Mot de passe"
            />
            <input
              type="password"
              name="ConfirmPassword"
              value={userData.ConfirmPassword}
              onChange={handleChange}
              placeholder="Confirmer mot de passe"
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SignUp_Page;

