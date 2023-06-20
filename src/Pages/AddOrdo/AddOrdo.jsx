    // src/pages/Page2.jsx
    import React, {useState} from 'react';
    import './AddOrdo.css'
    import FormOrdo from '../../components/FormOrdo/FormOrdo';
    // import MyDocument from '../../components/PDF/MyDocument';
    import { Document, Page, Text, View } from '@react-pdf/renderer';

    import ReactPDF from '@react-pdf/renderer'

    // ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

    function AddOrdo() {
        const [formulaires, setFormulaires] = useState([]);

        const ajouterFormulaire = () => {
            setFormulaires([...formulaires, <FormOrdo key={formulaires.length} />]);
        };

        const genererPDF = () => {
            // Génération du PDF
        };

        // const récupérerDonnées = (index, data) => {
        //     const updatedFormulaires = [...formulaires];
        //     updatedFormulaires[index] = data;
        //     setFormulaires(updatedFormulaires);
        //   };

        const récupérerDonnées = (data) => {
            setFormulaires([...formulaires, data]);
        };          

    
        return (
        <div className="container">
            <h1 className="Title">Ajouter une ordonnance</h1>
            
            <div className="contform">
                <FormOrdo onFormSubmit={récupérerDonnées} />
                {/* <FormOrdo/> */}
                {formulaires.map((formulaire) => formulaire)}
            </div>

            <div className="contbutt">
                <button onClick={ajouterFormulaire} className="butadd" style={{width: '250px'}}>
                    Ajouter un médicament
                </button>

                <button type="submit" onClick={genererPDF} className="butenv" style={{width: '200px'}}>
                    Créer l'ordonnance
                </button>

                <button
                    onClick={() => console.log('Données des formulaires:', formulaires)}
                    className="butenv"
                    style={{ width: '200px' }}>
                    Afficher les données
                </button>
            </div>
        </div>

    );
    }

    export default AddOrdo;
