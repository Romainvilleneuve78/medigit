import React, { useState } from 'react';
import './AddOrdo.css'
import FormOrdo from '../../components/FormOrdo/FormOrdo';

function AddOrdo() {
  const [formulaires, setFormulaires] = useState([]);

  const ajouterFormulaire = () => {
    setFormulaires([...formulaires, <FormOrdo key={formulaires.length} />]);
  };

  const genererPDF = () => {
    // Effectuez les actions nécessaires pour générer le PDF
    // ...

    console.log('PDF généré avec succès !');
  };

  return (
    <div className="container">
      <h1 className="Title">Ajouter une ordonnance</h1>

      <div className="contform">
        <FormOrdo />
        {formulaires.map((formulaire) => formulaire)}
      </div>

      <div className="contbutt">
        <button onClick={ajouterFormulaire} className="butadd" style={{ width: '250px' }}>
          Ajouter un médicament
        </button>

        <button onClick={genererPDF} className="butenv" style={{ width: '200px' }}>
          Créer l'ordonnance
        </button>
      </div>
    </div>
  );
}

export default AddOrdo;
