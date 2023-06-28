// src/pages/Page1.jsx
import React from 'react';
import './Ordopdf.css';
import DownloadPDF from '../../components/PDF/MyDocument';


function Ordopdf() {
    return (
        <>

        <div class='titlepdf'><h1>MON ORDONNANCE</h1></div>
            <div class='container_ordo'> 

                <button class= "pdp_ordopdf"><img src="../../images/pdp.png" alt="icone des points"></img><span class= "title_ordo">DR Nozman</span></button>

                <div class='info_ordo'>
                        <div class="Name_ordo">
                            <h2>Gynecology Consultation</h2>
                            <p className="my-paragraph1">Valid until 10.02.24</p>
                            <p className="my-paragraph2">Ici seront noté les informations concernant le médicament que le patient doit prendre </p>
                            <p className="my-paragraph3"> Ici seront noté les fréquence à laquelle le patient devra prendre son médicament et de quelle façon il devra le prendre</p> 
                        </div>

                        

                        <div class='option_ordo'>
                            <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                            <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>
                        </div>
                </div>

            </div>

            <div class = "bouton_ordo" >
                    <button class = "bouton_pdf">Télecharger l'ordonnance</button>
                    <DownloadPDF className='bouton_pdf'/>
                    <button class = "bouton_qr">Afficher le QR Code</button>
            </div>
        </>
    );
}

export default Ordopdf;
