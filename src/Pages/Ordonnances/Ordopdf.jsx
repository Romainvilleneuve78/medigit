import React, { useState, useEffect } from 'react';
import './Ordopdf.css';
import DownloadPDF from '../../components/PDF/MyDocument';
import {useParams} from 'react-router-dom';
import axios from 'axios';



function Ordopdf() {
    const { idPrescription } = useParams();
    const [prescriptionData, setPrescriptionData] = useState(null);

    // console.log(idPrescription);

    useEffect(() => {
        // Effectuez la requête GET vers le backend pour récupérer les informations de l'ordonnance
        axios.get(`http://localhost:3000/prescription/2`)
        // axios.get(`/prescription/${idPrescription}`)
            .then(response => {
                setPrescriptionData(response.data);
            })
            .catch(error => {
                console.error('Error fetching prescription data:', error);
            });
    }, [idPrescription]);

    if (!prescriptionData) {
        return <div>Loading... </div>; // Afficher un message de chargement tant que les données ne sont pas disponibles
    }

    return (
        <>
            <div className='ordopdf'>

                {/* <div className='titlepdf'><h1>MON ORDONNANCE</h1></div> */}
                <div className='titlepdf'><h1>{prescriptionData.Name}</h1></div>
                {/* <div className='titlepdf'><h1>{idPrescription}</h1></div> */}
                <div className='container_ordo'> 

                    <button className= "pdp_ordopdf"><img src="../../images/pdp.png" alt="icone des points"></img><span className= "title_ordo">{prescriptionData.ProfessionalFirstName} {prescriptionData.ProfessionalLastName}</span></button>

                    <div className='info_ordo'>
                        <div className="Name_ordo">
                            <h2>Consultation médecin généraliste</h2>

                            <div className = "id_ordo">
                                <p className ="my-paragraph4">{prescriptionData.Name} -</p>
                                <p className ="my-paragraph5">ID: {prescriptionData.idPrescription}</p>
                            </div>

                            <p className="my-paragraph1">Paris, le {prescriptionData.Date_creation}</p>
                            <p className="my-paragraph2">Valide jusqu'au {prescriptionData.Date_validity}</p>
                            <h3>{prescriptionData.ClientFirstName} {prescriptionData.ClientLastName}</h3>
                            <p className="my-paragraph3">ID: {prescriptionData.Clientid}</p> 

                        
                            <div className = "medoc">
                                <p className = "my-paragraph6">{prescriptionData.Medicine} -</p>
                                <p className = "my-paragraph7">500g</p>
                            </div>

                            <div className = "frequence_prise">
                                <p className = "my-paragraph8">{prescriptionData.Description}</p>
                            </div>

                            <div className = "medoc">
                                <p className = "my-paragraph6">Anti-inflammatoire -</p>
                                <p className = "my-paragraph7">300g</p>
                            </div>

                            <div className = "frequence_prise">
                                <p className = "my-paragraph8">3 doses par jour</p>
                            </div>
                        
                        </div>
                    

                        

                        <div className='option_ordo'>
                            <button className= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                            <button className= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>
                        </div>
                    </div>

                </div>  

                <div className = "bouton_ordo" >
                    
                    
                    
                <button className="downloadpdf">
                    {/* <  DownloadPDF idPrescription={prescriptionData.idPrescription}/> */}
                    {/* <  DownloadPDF idPrescription={idPrescription}/> */}
                    {/* <  DownloadPDF idPrescription={2}/> */}
                    <  DownloadPDF/>

                </button>
                    
                    
                    {/* <button className = "bouton_qr">Afficher le QR Code</button>s */}
                </div>
            </div>
        </>
    );
}

export default Ordopdf;