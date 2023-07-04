import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';

const MenuPageHome = () => {
  const sessionData = JSON.parse(sessionStorage.getItem('user'));
  const idUser = sessionData ? sessionData.idUser : null;
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (idUser) {
      axios
        .get(`http://localhost:3000/user/${idUser}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [idUser]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  let menuHomeClass = 'menu_home_non_co';
  if (user && sessionData) {
    if (sessionData.Kind === 0) {
      menuHomeClass = 'menu_home_co_0';
    } else if (sessionData.Kind === 1) {
      menuHomeClass = 'menu_home_co_1';
    }
  }

  return (
    <>
      
      <nav className={menuHomeClass}>
        <div className="links">
          <ul>
            <li>
              <ScrollLink to="expl" smooth={true} duration={500} className="linkHome">
                Aide
              </ScrollLink>
            </li>
            {!idUser || !sessionData ? (
              <li>
                <ScrollLink to="sign" smooth={true} duration={500} className="linkHome">
                  Se connecter
                </ScrollLink>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/Profil" className="linkHome">
                    Mon Profil
                  </Link>
                </li>
                {sessionData.Kind === 0 && (
                  <li>
                    <Link to="/Ordonnance" className="LinkHomefin">
                      Mes Ordonnances
                    </Link>
                  </li>
                )}
                {sessionData.Kind === 1 && (
                    <ul className='divlinks'>
                      <li><Link to="/AddOrdo" className="LinkHomefin" style={{marginRight:'4.2vw'}}>Faire une ordonnance</Link></li>
                      <li><Link to="/Ordonnance" className="LinkHomefin">Mes ordonnances</Link></li>
                    </ul> 
                )}
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MenuPageHome;