// src/pages/Page2.jsx
import React, { useState } from 'react';
import './AddOrdo.css'
import FormOrdo from '../../components/FormOrdo/FormOrdo';
// import MyDocument from '../../components/PDF/MyDocument';
//import { Document, Page, Text, View } from '@react-pdf/renderer';

//import ReactPDF from '@react-pdf/renderer'

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

function AddOrdo() {
    const [formulaires, setFormulaires] = useState([]);

    const ajouterFormulaire = () => {
        setFormulaires([...formulaires, <FormOrdo key={formulaires.length} />]);
    };

    const genererPDF = () => {
        // const ReactPDF = require('@react-pdf/renderer');
        const fs = require('fs');
        const path = require('path');

        const MyDocument = () => (
            <ReactPDF.Document>
                <ReactPDF.Page>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </ReactPDF.Page>
            </ReactPDF.Document>
        );

        const pdfPath = path.join(__dirname, 'example.pdf');
        ReactPDF.render(<MyDocument />, pdfPath, () => {
            // Manipulation supplémentaire après la génération du PDF (facultatif)
            console.log('PDF généré avec succès !');
        });
    };

    
        return (
            <>
                <div class="add_ordo">
                    

                <div class='formulaire'>

                    <form class='id_secu' action="/action_page.php">
                        <label for="id_secu">Patient Numero securité sociale :</label>
                        <input type="text" id="id_secu" name="id_secu" className='id_secu'></input>
                        <button type="submit">Valider</button>
                    </form>

                    <div className="prescription">
                        <FormOrdo />
                        {formulaires.map((formulaire) => formulaire)}
                    </div>

                    <button onClick={ajouterFormulaire}>Ajouter un médicament</button>
                    <button type="submit" onClick={genererPDF}>Créer l'ordonnance</button>

                </div>
            </div>
        </>
    );
}

export default AddOrdo;
