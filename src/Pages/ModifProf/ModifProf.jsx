import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModifProf.css'
import SignUp from '../../components/SignUp';

//fonction updateProfessional
/*
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

  function SignUp_Page() {

    const userKind = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).Kind : null;
    
  
    if(userKind==0){
    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData.idUser;
    const [nSecu, setNSecu] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
  
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      // Récupérer l'ID de l'utilisateur à partir du sessionStorage
      
  
      fetch(`http://localhost:3000/user/${idUser}`)
        .then(response => response.json())
        .then(data => {
          setUser(data);
          setFirstName(data.FirstName);
          setLastName(data.LastName);
          setPhone(data.Phone);
          setFix(data.Fix);
          setEmail(data.Email);
          setSex(data.Sex);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération du user :', error);
        });
    }, []);
  
    const handleClientSubmit = (event) => {
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
        handleSubmit(event);
    };
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');
    const [fix, setFix] = useState('');
    const [email, setEmail] = useState('');
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const updatedUser = {
        FirstName: firstName,
        LastName: lastName,
        Sex: sex,
        Birthdate: birthdate,
        Phone: phone,
        Fix: fix,
        Email: email
      };
  
      axios.post(`http://localhost:3000/update/user/${idUser}`, updatedUser)
        .then(response => {
          console.log(response.data.message);
          // Effectuer des actions supplémentaires après la mise à jour réussie, si nécessaire
        })
        .catch(error => {
          console.error(error);
          // Gérer les erreurs de requête, si nécessaire
        });
    };
  
    return (
      <>
        <div class='header_sign'>
          <div class='fond'>
            <h1>Modifier mon profil</h1>
            <img src='../../images/mon-espace.png'></img>
          </div>
        </div>

        <div className='modif'>

          <form onSubmit={handleClientSubmit}>

            <label>Numéro de sécurité sociale:</label>
            <input type="text" value={nSecu} onChange={(e) => setNSecu(e.target.value)} style={{marginRight:'5.5%'}}/>

            <div>
              <label htmlFor="sex">Sexe:</label>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="M"
                    checked={sex === 'M'}
                    onChange={e => setSex(e.target.value)}
                  />
                  Homme
                </label>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="F"
                    checked={sex === 'F'}
                    onChange={e => setSex(e.target.value)}
                  />
                  Femme
                </label>
            </div>

            <div className='info_1'>
              <label htmlFor="firstName">Prénom:</label>
              <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} style={{marginRight:'25%', width:'19%'}} />
              <label htmlFor="lastName">Nom:</label>
              <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>

            <div className='info_2'>
              <label htmlFor="birthdate">Date de naissance:</label>
              <input type="date" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} style={{width:'10%'}}/>
            </div>

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} style={{width:'21%'}}/>

            <div className='info_3'>
              <label htmlFor="phone">Téléphone:</label>
              <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} style={{width:'18%', marginRight:'24.5%'}}/>
              <label htmlFor="fix">Fixe:</label>
              <input type="text" id="fix" value={fix} onChange={e => setFix(e.target.value)}/>
            </div>
            
            <div>
              <label>Adresse:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{marginRight:'24.5%', width:'19.5%'}}/>
              <label>Ville:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <button type="submit">Mettre à jour</button>
          </form>
        </div>
      </>
    );
    }else{
      const [specialisation, setSpecialisation] = useState('');
    const [activityAdress, setActivityAdress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
  
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      // Récupérer l'ID de l'utilisateur à partir du sessionStorage
      
  
      fetch(`http://localhost:3000/user/${idUser}`)
        .then(response => response.json())
        .then(data => {
          setUser(data);
          setFirstName(data.FirstName);
          setLastName(data.LastName);
          setPhone(data.Phone);
          setFix(data.Fix);
          setEmail(data.Email);
          setSex(data.Sex);
          setBirthdate(data.Birthdate);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération du user :', error);
        });
    }, []);
  
    const handleProfessionalSubmit = (event) => {
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
        handleSubmit(event);
    };
  
    const sessionData = JSON.parse(sessionStorage.getItem('user'));
    const idUser = sessionData.idUser;
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');
    const [fix, setFix] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const updatedUser = {
        FirstName: firstName,
        LastName: lastName,
        Sex: sex,
        Birthdate: birthdate,
        Phone: phone,
        Fix: fix,
        Email: email
      };
  
      axios.post(`http://localhost:3000/update/user/${idUser}`, updatedUser)
        .then(response => {
          console.log(response.data.message);
          // Effectuer des actions supplémentaires après la mise à jour réussie, si nécessaire
        })
        .catch(error => {
          console.error(error);
          // Gérer les erreurs de requête, si nécessaire
        });
    };
  
    return (
      <form onSubmit={handleProfessionalSubmit}>
        <div>
          <label htmlFor="firstName">Prénom:</label>
          <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Nom:</label>
          <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div>
        <label htmlFor="sex">Sexe:</label>
        <label>
          <input
            type="radio"
            name="sex"
            value="M"
            checked={sex === 'M'}
            onChange={e => setSex(e.target.value)}
          />
          Homme
        </label>
        <label>
          <input
            type="radio"
            name="sex"
            value="F"
            checked={sex === 'F'}
            onChange={e => setSex(e.target.value)}
          />
          Femme
          </label>
          </div>
        <div>
          <label htmlFor="birthdate">Date de naissance:</label>
          <input type="date" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Téléphone:</label>
          <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fix">Fixe:</label>
          <input type="text" id="fix" value={fix} onChange={e => setFix(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
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
  
  export default SignUp_Page;