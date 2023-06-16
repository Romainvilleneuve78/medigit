    // src/pages/Page2.jsx
    import React, {useState} from 'react';
    import './AddOrdo.css'
    import FormOrdo from '../../components/FormOrdo/FormOrdo';

    function AddOrdo() {
        const [formulaires, setFormulaires] = useState([]);

        const ajouterFormulaire = () => {
            setFormulaires([...formulaires, <FormOrdo key={formulaires.length} />]);
        };

    
        return (
        <div className="container">
            <h1>Ajouter une ordonnance</h1>
            
            <div className="contform">
                <FormOrdo />
                {formulaires.map((formulaire) => formulaire)}
            </div>

            <div className="contbutt">
                <button onClick={ajouterFormulaire} class="butadd" style={{width: '250px'}}>
                    Ajouter un médicament
                </button>

                <button type="submit" class="butenv" style={{width: '200px'}}>Créer l'ordonnance</button>
            </div>
        </div>

    );
    }

    export default AddOrdo;
