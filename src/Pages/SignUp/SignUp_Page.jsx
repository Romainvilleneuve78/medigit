// src/pages/Page2.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../../components/SignUp';
import './SignUp.css';



//vraie fonction
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
            <h2>Qui est vous ?</h2>
            <label>
              <input type="radio" name="Kind" value="0" checked={userData.Kind === '0'} onChange={handleChange}/>
              Client
            </label>
            <label>
              <input type="radio" name="Kind" value="1" checked={userData.Kind === '1'} onChange={handleChange}/>
              Professional
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
              name="Password"
              value={userData.Password}
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


/*
//fonction updateProfessional
function SignUp_Page() {
  const [specialisation, setSpecialisation] = useState('');
  const [activityAdress, setActivityAdress] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer l'id de l'utilisateur à partir du sessionStorage
    const userId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).idUser : null;

    // Vérifier si l'id de l'utilisateur est disponible
    if (!userId) {
      console.log('Id utilisateur non trouvé dans le sessionStorage');
      return;
    }

    // Construire l'objet de données à envoyer dans la requête
    const data = {
      user_id: userId,
      Specialisation: specialisation,
      Activity_adress: activityAdress,
      City: city,
      Description: description
    };

    // Effectuer la requête de mise à jour du professionnel
    fetch('http://localhost:3000/professional/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Mise à jour du professionnel réussie');
          // Faire quelque chose en cas de réussite, par exemple, afficher un message de succès ou rediriger vers une autre page
        } else {
          console.log('Erreur lors de la mise à jour du professionnel');
          // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
        }
      })
      .catch(error => {
        console.log('Erreur lors de la mise à jour du professionnel:', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Spécialisation:
        <input type="text" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} />
      </label>
      <br />
      <label>
        Adresse d'activité:
        <input type="text" value={activityAdress} onChange={(e) => setActivityAdress(e.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Mettre à jour</button>
    </form>
  );
}

export default SignUp_Page;*/

//fonction update client
/*
function SignUp_Page() {
  const [nSecu, setNSecu] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer l'id de l'utilisateur à partir du sessionStorage
    const userId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).idUser : null;

    // Vérifier si l'id de l'utilisateur est disponible
    if (!userId) {
      console.log('Id utilisateur non trouvé dans le sessionStorage');
      return;
    }

    // Construire l'objet de données à envoyer dans la requête
    const data = {
      user_id: userId,
      n_secu: nSecu,
      Adress: address,
      City: city
    };

    // Effectuer la requête de mise à jour du client
    fetch('http://localhost:3000/client/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Mise à jour du client réussie');
          // Faire quelque chose en cas de réussite, par exemple, afficher un message de succès ou rediriger vers une autre page
        } else {
          console.log('Erreur lors de la mise à jour du client');
          // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
        }
      })
      .catch(error => {
        console.log('Erreur lors de la mise à jour du client:', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Numéro de sécurité sociale:
        <input type="text" value={nSecu} onChange={(e) => setNSecu(e.target.value)} />
      </label>
      <br />
      <label>
        Adresse:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Mettre à jour</button>
    </form>
  );
}

export default SignUp_Page;*/


/*
function SignUp_Page() {

  const userKind = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).Kind : null;
  console.log(userKind);

  if(userKind==0){
    const [nSecu, setNSecu] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer l'id de l'utilisateur à partir du sessionStorage
    const userId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).idUser : null;

    // Vérifier si l'id de l'utilisateur est disponible
    if (!userId) {
      console.log('Id utilisateur non trouvé dans le sessionStorage');
      return;
    }

    // Construire l'objet de données à envoyer dans la requête
    const data = {
      user_id: userId,
      n_secu: nSecu,
      Adress: address,
      City: city
    };

    // Effectuer la requête de mise à jour du client
    fetch('http://localhost:3000/client/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Mise à jour du client réussie');
          // Faire quelque chose en cas de réussite, par exemple, afficher un message de succès ou rediriger vers une autre page
        } else {
          console.log('Erreur lors de la mise à jour du client');
          // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
        }
      })
      .catch(error => {
        console.log('Erreur lors de la mise à jour du client:', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Numéro de sécurité sociale:
        <input type="text" value={nSecu} onChange={(e) => setNSecu(e.target.value)} />
      </label>
      <br />
      <label>
        Adresse:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Mettre à jour</button>
    </form>
  );
  }else{
    const [specialisation, setSpecialisation] = useState('');
  const [activityAdress, setActivityAdress] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer l'id de l'utilisateur à partir du sessionStorage
    const userId = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).idUser : null;

    // Vérifier si l'id de l'utilisateur est disponible
    if (!userId) {
      console.log('Id utilisateur non trouvé dans le sessionStorage');
      return;
    }

    // Construire l'objet de données à envoyer dans la requête
    const data = {
      user_id: userId,
      Specialisation: specialisation,
      Activity_adress: activityAdress,
      City: city,
      Description: description
    };

    // Effectuer la requête de mise à jour du professionnel
    fetch('http://localhost:3000/professional/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Mise à jour du professionnel réussie');
          // Faire quelque chose en cas de réussite, par exemple, afficher un message de succès ou rediriger vers une autre page
        } else {
          console.log('Erreur lors de la mise à jour du professionnel');
          // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
        }
      })
      .catch(error => {
        console.log('Erreur lors de la mise à jour du professionnel:', error);
        // Gérer les erreurs, par exemple, afficher un message d'erreur ou effectuer une action appropriée
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Spécialisation:
        <input type="text" value={specialisation} onChange={(e) => setSpecialisation(e.target.value)} />
      </label>
      <br />
      <label>
        Adresse d'activité:
        <input type="text" value={activityAdress} onChange={(e) => setActivityAdress(e.target.value)} />
      </label>
      <br />
      <label>
        Ville:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Mettre à jour</button>
    </form>
  );
  }

  
}

export default SignUp_Page;*/