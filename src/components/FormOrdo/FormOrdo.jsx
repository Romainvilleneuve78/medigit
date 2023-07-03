import React, { useState } from 'react';
import './FormOrdo.css';

function FormOrdo({ index, medicament, description, onFormSubmit }) {
  const [medic, setMedic] = useState(medicament);
  const [descr, setDescr] = useState(description);
  var listMedic;
  var listDescr;

  const handleChange = (event) => {
    if (event.target.name === 'medic') {
      setMedic(event.target.value);
    } else if (event.target.name === 'descr') {
      setDescr(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    console.log(medic);
    console.log(descr);
    listMedic+=medic+',';
    listDescr+=descr+',';
    console.log(listMedic);
    console.log(listDescr);
    event.preventDefault();
    onFormSubmit(index, medic, descr);
    setMedic('');
    setDescr('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} class="info">
        <div class='info1'>
          <label>Médicament:</label>
          <input type="text" name="medic" value={medic} onChange={handleChange} />
        </div>

        <div class='info3'>
          <label>Description:</label>
          <br></br>
          <textarea type="text" name="descr" value={descr} onChange={handleChange} row="3" />
        </div>
        <button type="submit">Ajouter</button>
      </form>
</div>
);
}

export default FormOrdo;