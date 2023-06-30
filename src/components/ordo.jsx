import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez également Routes
import Profil_pro from '../Pages/Profil/Profil_pro';
import Ordopdf from '../Pages/Ordonnances/Ordopdf';



function Ordo({prescription}) {    
    return (
        <>
            <div class='container_ordo'> 

                <button class= "pdp_ordo"> <Link to="/Profil_pro"><img src="../../images/pdp.png" alt="icone des points"></img></Link><span class= "title_ordo">DR Nozman</span></button>

                <div class='info_ordo'>
                        <div class="Name_ordo">
                            {/* <h2><Link to="/Ordopdf">Gynecology Consultation</Link></h2> */}
                            <h2><Link to="/Ordopdf">{prescription.Name}</Link></h2>
                            <p className="my-paragraph1">Valid until 10.02.24</p>
                            <p className="my-paragraph2">To be taken three times a day for two weeks and then once a month for two month</p>
                        </div>

                        <div class='option_ordo'>
                            <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                            {/* <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button> */}
                            <button class= "poubelle"> <img src="../../images/poubelle-de-recyclage.png" alt="icone de poubelle"></img></button>

                        </div>
                </div>
            </div>

        </>
    );
}

export default Ordo;