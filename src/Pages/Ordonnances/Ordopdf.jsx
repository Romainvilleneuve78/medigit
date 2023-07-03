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
        axios.get(`http://localhost:3000/prescription/${idPrescription}`)
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

    const med = prescriptionData.Medicine.split(',');
    const descr = prescriptionData.Description.split(',');
  
    const result = [];
    const maxLength = Math.max(med.length, descr.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < med.length) {
        result.push(med[i].trim());
      }
      if (i < descr.length) {
        result.push(descr[i].trim());
      }
    }
  
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % result.length);
    // };
  


    // console.log(result);

    return (
        <>
            <div className='ordopdf'>
                <div className='titlepdf'><h1>{prescriptionData.Name}</h1></div>
                <div className='container_ordo'> 

                    <button className= "pdp_ordopdf"><img src="../../images/pdp.png" alt="icone des points"></img><span className= "title_ordo">{prescriptionData.ProfessionalFirstName} {prescriptionData.ProfessionalLastName}</span></button>

                    <div className='info_ordo'>
                        <div className="Name_ordo">
                            <h2>Consultation {prescriptionData.Specialisation}</h2>

                            <div className = "id_ordo">
                                <p className ="my-paragraph4">{prescriptionData.Name} -</p>
                                <p className ="my-paragraph5">ID: {prescriptionData.idPrescription}</p>
                            </div>

                            <p className="my-paragraph1">Le {prescriptionData.Date_creation}</p>
                            <p className="my-paragraph2">Valide jusqu'au {prescriptionData.Date_validity}</p>
                            <h3>{prescriptionData.ClientFirstName} {prescriptionData.ClientLastName}</h3>
                            <p className="my-paragraph3">ID: {prescriptionData.Clientid}</p> 


                            <div className="Med">
                                {result.map((item, index) => (
                                    <li key={index} className={index % 2 === 0 ? 'medoc' : 'frequence_prise'}>
                                        {item}
                                    </li>
                                ))}
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