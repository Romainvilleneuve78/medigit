import React from 'react';
import './Ordopdf.css';
import DownloadPDF from '../../components/PDF/MyDocument';


function Ordopdf() {
    return (
        <>
            <div className='ordopdf'>

                <div class='titlepdf'><h1>MON ORDONNANCE</h1></div>
                <div class='container_ordo'> 

                    <button class= "pdp_ordopdf"><img src="../../images/pdp.png" alt="icone des points"></img><span class= "title_ordo">DR Nozman</span></button>

                    <div class='info_ordo'>
                            <div class="Name_ordo">
                                <h2>Consultation médecin généraliste</h2>

                                <div class = "id_ordo">
                                    <p className ="my-paragraph4">Inflammation du genou gauche -</p>
                                    <p className ="my-paragraph5">123983819</p>
                                </div>

                                <p className="my-paragraph1">Paris, le 2021-09-01</p>
                                <p className="my-paragraph2">Valide jusqu'au 2021-09-30</p>
                                <h3>M. Albert Smith</h3>
                                <p className="my-paragraph3"> 1234567890123</p> 

                            
                                <div class = "medoc">
                                    <p className = "my-paragraph6">Doliprane -</p>
                                    <p className = "my-paragraph7">500g</p>
                                </div>

                                <div class = "frequence_prise">
                                    <p className = "my-paragraph8">2 comprimés par jour</p>
                                </div>

                                <div class = "medoc">
                                    <p className = "my-paragraph6">Anti-inflammatoire -</p>
                                    <p className = "my-paragraph7">300g</p>
                                </div>

                                <div class = "frequence_prise">
                                    <p className = "my-paragraph8">3 doses par jour</p>
                                </div>
                            
                            </div>
                        

                            

                            <div class='option_ordo'>
                                <button class= "coeur"> <img src="../../images/coeur.png" alt="icone du bouton"></img></button>
                                <button class= "points"> <img src="../../images/petitspoints.png" alt="icone des points"></img></button>
                            </div>
                    </div>

                </div>  

                <div class = "bouton_ordo" >
                    
                    
                    
                <button class="downloadpdf">
                    <  DownloadPDF />
                </button>
                    
                    
                    <button class = "bouton_qr">Afficher le QR Code</button>
                </div>
            </div>
        </>
    );
}

export default Ordopdf;